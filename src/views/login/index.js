import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import JungleIcon from '../../assets/icons/jungle-devs-logo.svg'
import Button from '../../components/button'
import { login } from '../../modules/user/actions'

import Input from '../../components/input'

import styles from './styles.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const onInputChange = useCallback((event, state) => {
    const { value } = event.target

    state(value)
  }, [])

  const onSubmit = useCallback(async event => {
    event.preventDefault()

    if(email && password) {
        dispatch(login({ email, password }))
    }

  }, [dispatch, email, password])

  return (
    <div className={styles['login']}>
      <div className={styles['login-card']}>
        <img className={styles['login-icon']} src={JungleIcon} alt="Jungle logo" />

        <form className={styles['form-container']} onSubmit={onSubmit}>
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

        <Button type="submit">
          Login
        </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
