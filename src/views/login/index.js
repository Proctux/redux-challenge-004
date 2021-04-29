import React, { useCallback, useState } from 'react'

import JungleIcon from '../../../public/assets/icons/jungle-devs-logo.svg'
import Button from '../../components/button'

import Input from '../../components/input'

import styles from './styles.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const onInputChange = useCallback((event, state) => {
    const { value } = event.target

    state(value)
  }, [])

  return (
    <div className={styles['login']}>
      <div className={styles['login-card']}>
        <svg className={styles['login-icon']} viewBox={JungleIcon.viewBox} aria-hidden="true">
          <use xlinkHref={`#${JungleIcon.id}`}/>
        </svg>

        <form className={styles['form-container']}>
          <Input
            id="email-input"
            label="email"
            hiddenLabel
            value={email}
            onChange={event => onInputChange(event, setEmail)}
            placeholder="Email"
            type="email"
            name="email"
          />
          <Input
            id="password-input"
            label="password"
            hiddenLabel
            value={password} onChange={event => onInputChange(event, setPassword)}
            placeholder="Password"
            type="password"
            name="password"
            hasError={error}
          />
        </form>

        <Button>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
