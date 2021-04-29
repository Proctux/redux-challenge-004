import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ShowPasswordIcon from '../../../public/assets/icons/password-show.svg'
import HidePasswordIcon from '../../../public/assets/icons/password-hide.svg'

import styles from './styles.module.css'

const INPUT_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password'
}

const Input = ({
  label,
  placeholder,
  onChange,
  disabled,
  name,
  value,
  type,
  id,
  hiddenLabel
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const onTogglePassword = useCallback(() => {
    setShowPassword(prevState => !prevState)
  }, [])

  const toggleIcon = useMemo(() => (showPassword ? HidePasswordIcon : ShowPasswordIcon), [showPassword])

  return (
    <div className={styles['input-container']}>
      <label
        htmlFor={id}
        className={classnames(styles['input-label'], {[styles['hidden-label']]: hiddenLabel})}
      >
        {label}
      </label>
      <div className={styles['input-box']}>
        <input
          className={styles["input-content"]}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          name={name}
          value={value}
          type={showPassword ? INPUT_TYPE.TEXT : type}
          id={id}
        />
        {type === INPUT_TYPE.PASSWORD && (
          <button
            className={styles['show-password-button']}
            onClick={onTogglePassword}
            type="button"
            aria-label="Show password"
            name={name}
            disabled={disabled}
          >
            <svg className={styles['show-password-icon']} viewBox={toggleIcon.viewBox}>
              <use xlinkHref={`#${toggleIcon.id}`} />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  hiddenLabel: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: '',
  onChange: () => {},
  disabled: false,
  name: '',
  value: '',
  type: 'text',
  hiddenLabel: false,
}

export default Input
