import React, { useEffect } from 'react'
import styles from './modal.module.scss'

const Modal = ({ show, onClose, title, children }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.key || e.code) === 'Escape') onClose()
  }
  useEffect(() => {
    window.addEventListener('keydown', closeOnEscapeKeyDown)
    return () => window.removeEventListener('keydown', closeOnEscapeKeyDown)
  }, [])
  return (
    show && (
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal__header}>
            <h4 className={styles.modal__title}>{title}</h4>
          </div>
          <div className={styles.modal__body}>{children}</div>
          <div className={styles.modal__footer}>
            <button className={styles.modal__button} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
