import React, { useState, useEffect } from 'react'
import { Form, SubmitButton, ResetButton } from './FormElements'
import * as Yup from 'yup'

const GeneratForm = ({ formSchema, className, submit, children }) => {
  const [formData, setFormData] = useState({})
  const [validationSchema, setValidationSchema] = useState({})

  useEffect(() => {
    console.log('useEffect')
    generateValidationSchema(formSchema)
  }, [])

  const generateValidationSchema = (formSchema) => {
    let _formData = {}
    let schema = {}
    for (const key in formSchema) {
      if (formSchema.hasOwnProperty(key)) {
        _formData[key] = ''
        const field = formSchema[key]
        switch (field.yupType ? field.yupType : field.type) {
          case 'text':
            schema[key] = Yup.string()
            break
          case 'mixed':
            schema[key] = Yup.mixed()
            break
          case 'number':
            schema[key] = Yup.number()
            break
          case 'email':
            schema[key] = Yup.string().email()
            break
          case 'date':
            schema[key] = Yup.date()
            break
          case 'select':
            schema[key] = Yup.string().oneOf(formSchema[key].options.map((o) => o.value))
            break
          default:
            break
        }
        if (field.required && field.required === true) {
          schema[key] = schema[key].required()
        }
        if (field.schemaValidation) {
          const { min, max, matches } = field.schemaValidation
          if (min) {
            schema[key] = schema[key].min(
              min.value === 'new Date()' ? new Date() : min.value,
              min.label
            )
          }
          if (max) {
            schema[key] = schema[key].max(
              max.value === 'new Date()' ? new Date() : max.value,
              max.label
            )
          }
          if (matches) {
            console.log(matches)
            schema[key] = schema[key].test('test', matches.label, (value) => matches.value)
          }
        }
      }
      setFormData(_formData)
      setValidationSchema(Yup.object().shape({ ...schema }))
    }
  }

  return (
    <div>
      <Form
        className={className}
        enableReinitialize
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={submit}
      >
        {children}
        <SubmitButton title="Submit" />
        <ResetButton title="Reset" />
      </Form>
    </div>
  )
}

export default GeneratForm
