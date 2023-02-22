import React, { useEffect, useState } from 'react'
import { TextField, SelectField, NumberField, DateField } from '../../components/Form/FormElements'
import GeneratForm from '@/components/Form/GeneratForm'
import createEmployeeModel from '@/data/modelCreateUser.json'
import styles from '../../components/Form/form.module.scss'
import * as userActions from '../../features/users'
import { useDispatch } from 'react-redux'
import Modal from '../../components/Modal'

const formSchema = createEmployeeModel.formSchema

const CreateEmployee = () => {
  const dispatch = useDispatch()
  const [showModal, setShowModal] = useState(false)
  const getFormElement = (elementName, elementSchema) => {
    const props = {
      name: elementName,
      label: elementSchema.label,
      className: elementSchema.className,
      options: elementSchema.options,
    }

    if (elementSchema.type === 'text' || elementSchema.type === 'email') {
      return <TextField {...props} />
    }
    if (elementSchema.type === 'number') {
      return <NumberField {...props} />
    }
    if (elementSchema.type === 'date') {
      return <DateField {...props} />
    }

    if (elementSchema.type === 'select') {
      return <SelectField {...props} />
    }
  }
  const onSubmit = (values, { setSubmitting }) => {
    console.log('submit')
    console.log(values)
    dispatch(userActions.addUser(values))
    setSubmitting(false)
    setShowModal(true)
  }
  return (
    <div className={styles.createEmployee}>
      <h1>Create employee</h1>
      <GeneratForm formSchema={formSchema} className={styles.form} submit={onSubmit}>
        {Object.keys(formSchema).map((key, ind) => {
          if (ind % 2 === 0) {
            return (
              <div className={styles.form__row}>
                <div className={styles.form__group}>{getFormElement(key, formSchema[key])}</div>
                {Object.keys(formSchema)[ind + 1] && (
                  <div className={styles.form__group}>
                    {getFormElement(
                      Object.keys(formSchema)[ind + 1],
                      formSchema[Object.keys(formSchema)[ind + 1]]
                    )}
                  </div>
                )}
              </div>
            )
          }
        })}
      </GeneratForm>
      <Modal title="modal title" show={showModal} onClose={() => setShowModal(false)}>
        body
      </Modal>
    </div>
  )
}
export default CreateEmployee
