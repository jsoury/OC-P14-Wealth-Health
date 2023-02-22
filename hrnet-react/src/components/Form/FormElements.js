import React from 'react'
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
  useField,
  useFormik,
} from 'formik'

export function Form(props) {
  return (
    <Formik {...props}>
      <FormikForm className={props.className} noValidate="">
        {props.children}
      </FormikForm>
    </Formik>
  )
}

export function TextField(props) {
  const { name, label, placeholder, className, ...rest } = props
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className={className}
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ''}
        {...rest}
      />
      <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
    </>
  )
}

export function NumberField(props) {
  const { name, label, placeholder, className, ...rest } = props
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className={className}
        type="number"
        name={name}
        id={name}
        placeholder={placeholder || ''}
        {...rest}
      />
      <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
    </>
  )
}

export function DateField(props) {
  const { name, label, placeholder, className, ...rest } = props
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className={className}
        type="date"
        name={name}
        id={name}
        placeholder={placeholder || ''}
        {...rest}
      />
      <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
    </>
  )
}

export function SelectField(props) {
  const { name, label, className, options } = props
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as="select" id={name} name={name} className={className}>
        <option value="">Choose...</option>
        {options.map((optn, index) => (
          <option key={index} value={optn.value} label={optn.label || optn.value} />
        ))}
      </Field>
      <ErrorMessage name={name} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
    </>
  )
}

export function SubmitButton(props) {
  const { title, ...rest } = props
  const { isSubmitting } = useFormikContext()

  return (
    <button type="submit" {...rest} disabled={isSubmitting}>
      {title}
    </button>
  )
}

export function ResetButton(props) {
  const { title, ...rest } = props
  const { resetForm } = useFormikContext()

  return (
    <button type="button" {...rest} onClick={resetForm}>
      {title}
    </button>
  )
}
