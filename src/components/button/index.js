import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.module.css'

const ButtonTheme = {
  DEFAULT: 'default',
  SECONDARY: 'secondary'
}

const Button = ({ icon, children, onClick, type, disabled, theme }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classnames(styles['button-content'], styles[theme])}
    >
      {icon && (
        <svg className={styles['button-icon']} viewBox={icon.viewBox}>
          <use xlinkHref={`#${icon.id}`}/>
        </svg>
      )}
      {children}
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.shape({
      viewBox: PropTypes.string,
      id: PropTypes.string,
    }),
    PropTypes.string
  ]),
  children: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
}

Button.defaultProps = {
  onClick: () => {},
  icon: '',
  children: '',
  disabled: false,
  type: 'button',
  theme: ButtonTheme.DEFAULT
}

export default Button
