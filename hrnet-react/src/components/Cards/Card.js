import styles from './card.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function Card({ icon, image, title, link, direction, showMore, style, children }) {
  return (
    <div
      style={style}
      className={`${styles.card} ${styles[direction ? `card__${direction}` : 'no-direction']}`}
    >
      <a className={styles.card__link} href={link}>
        <div
          className={`${styles.card__header} ${
            styles[direction ? `card__${direction}` : 'no-direction']
          }`}
        >
          {icon ? (
            <div className={styles.card__icon}>
              <FontAwesomeIcon icon={icon} />
            </div>
          ) : (
            <div className={styles.card__image}>
              <img src={image} alt={title} height={525} width={700}></img>
            </div>
          )}
          <h4 className={styles.card__title}>{title}</h4>
        </div>
        <div className={styles.card__body}>{children}</div>
        {showMore && (
          <FontAwesomeIcon
            icon={faCircleRight}
            focusable="true"
            aria-hidden="false"
            pull="right"
            className={styles.card__showMore}
          />
        )}
      </a>
    </div>
  )
}
