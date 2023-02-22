import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import styles from './form.module.scss'
import stylesButton from '@/components/Button/button.module.scss'
import Alert from '@/components/Alert'
import Loader from '@/components/Loader'

const CreateEmployee = () => {
  const [isShow, setIsShow] = useState(false)
  const [succes, setSucces] = useState(true)
  const [isLoad, setIsLoad] = useState(false)

  const validationSchema = Yup.object().shape({
    first: Yup.string()
      .min(2, 'Le prénom doit contenir un minimum de 2 caractères')
      .max(50, 'Le prénom ne doit pas contenir plus de 50 caractères')
      .required('Veuillez renseigner ce champ.'),
    last: Yup.string()
      .min(2, 'Le nom doit contenir un minimum de 2 caractères')
      .max(50, 'Le nom ne doit pas contenir plus de 50 caractères')
      .required('Veuillez renseigner ce champ.'),
    birth: Yup.date('date invalide')
      .max(new Date(), 'La date ne peut pas être antérieure à celle du jour')
      .required('Veuillez renseigner ce champ.'),
    startDate: Yup.date('date invalide').required('Veuillez renseigner ce champ.'),
    street: Yup.string()
      .min(2, 'minimum de 2 caractères')
      .max(200, 'maximum de 200 caractères')
      .required('Veuillez renseigner ce champ.'),
    city: Yup.string()
      .min(2, 'minimum de 2 caractères')
      .max(200, 'maximum de 200 caractères')
      .required('Veuillez renseigner ce champ.'),
    state: Yup.string()
      .min(2, 'minimum de 2 caractères')
      .max(50, 'maximum de 50 caractères')
      .required('Veuillez renseigner ce champ.'),
    zipCode: Yup.number()
      .min(2, 'minimum de 2 caractères')
      .max(200, 'maximum de 200 caractères')
      .required('Veuillez renseigner ce champ.'),
    department: Yup.string()
      .min(2, 'minimum de 2 caractères')
      .max(200, 'maximum de 200 caractères')
      .required('Veuillez renseigner ce champ.'),
  })

  const inialValues = {
    first: '',
    last: '',
    birth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  }

  const handleSubmit = (body, { resetForm }) => {
    //call api send mail, show loader
    setIsLoad(true)

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          setIsLoad(false)
          setSucces(true)
          setIsShow(true)
          resetForm({})
        } else {
          setIsLoad(false)
          setSucces(false)
          setIsShow(true)
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Formik
        initialValues={inialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ resetForm, errors, touched }) => (
          <Form className={`${styles.form}`}>
            <div className={styles.form__row}>
              <div className={styles.form__group}>
                <Field
                  className={
                    errors.last && touched.last
                      ? `${styles.form__input} ${styles.form__error}`
                      : styles.form__input
                  }
                  name="last"
                  id="last"
                  type="text"
                  placeholder="name"
                />
                <label className={styles.form__label} htmlFor="last">
                  Nom
                </label>
                <ErrorMessage name="last" component="small" className={styles.message__error} />
              </div>
              <div className={styles.form__group}>
                <Field
                  className={
                    errors.first && touched.first
                      ? `${styles.form__input} ${styles.form__error}`
                      : styles.form__input
                  }
                  name="first"
                  id="first"
                  type="text"
                  placeholder="last name"
                />
                <label className={styles.form__label} htmlFor="first">
                  Prénom
                </label>
                <ErrorMessage name="first" component="small" className={styles.message__error} />
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__group}>
                <Field
                  className={
                    errors.birth && touched.birth
                      ? `${styles.form__input} ${styles.form__error}`
                      : styles.form__input
                  }
                  name="birth"
                  id="birth"
                  type="date"
                  placeholder="birth"
                />
                <label className={styles.form__label} htmlFor="birth">
                  Date of Birth
                </label>
                <ErrorMessage name="birth" component="small" className={styles.message__error} />
              </div>
              <div className={styles.form__group}>
                <Field
                  className={
                    errors.startDate && touched.startDate
                      ? `${styles.form__input} ${styles.form__error}`
                      : styles.form__input
                  }
                  name="startDate"
                  id="startDate"
                  type="date"
                  placeholder="startDate"
                />
                <label className={styles.form__label} htmlFor="startDate">
                  Start Date
                </label>
                <ErrorMessage
                  name="startDate"
                  component="small"
                  className={styles.message__error}
                />
              </div>
            </div>
            <div className={styles.form__row}>
              <div className={styles.form__group}>
                <Field
                  className={
                    errors.street && touched.street
                      ? `${styles.form__input} ${styles.form__error}`
                      : styles.form__input
                  }
                  name="street"
                  id="street"
                  type="text"
                  placeholder="street"
                />
                <label className={styles.form__label} htmlFor="street">
                  Street
                </label>
                <ErrorMessage name="street" component="small" className={styles.message__error} />
              </div>
              <div className={styles.form__group}>
                <Field
                  className={
                    errors.city && touched.city
                      ? `${styles.form__input} ${styles.form__error}`
                      : styles.form__input
                  }
                  name="city"
                  id="city"
                  type="string"
                  placeholder="city"
                />
                <label className={styles.form__label} htmlFor="city">
                  Start Date
                </label>
                <ErrorMessage name="city" component="small" className={styles.message__error} />
              </div>
            </div>

            <div className={styles.group__button}>
              <button
                type="button"
                onClick={resetForm}
                className={`${stylesButton.btn} ${stylesButton.annule}`}
              >
                Annuler
              </button>
              <button type="submit" className={`${stylesButton.btn} ${stylesButton.submit}`}>
                Envoyer
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {isShow && succes ? (
        <Alert type="success" isShow={isShow} setIsShow={setIsShow}>
          <p>Demande envoyée, nous vous recontacterons dans les plus bref delais.</p>
        </Alert>
      ) : (
        <Alert type="error" isShow={isShow} setIsShow={setIsShow}>
          <p>
            Une erreur s'est produite, veuillez réessayer plus tard ou nous contacter directement
            par email
            <a href="mailto:contact@entreprise-martin-marchand.fr">
              {' '}
              contact@entreprise-martin-marchand.fr
            </a>
          </p>
        </Alert>
      )}
      {isLoad && <Loader />}
    </>
  )
}
export default CreateEmployee
