import React from 'react'

import JungleIcon from '../../../public/assets/icons/jungle-devs-logo.svg'
import Button from '../../components/button'

import Input from '../../components/input'

import styles from './styles.module.css'

const Login = () => {


  return (
    <div className={styles['login']}>
      <div className={styles['login-card']}>
        <svg className={styles['login-icon']} viewBox={JungleIcon.viewBox} aria-hidden="true">
          <use xlinkHref={`#${JungleIcon.id}`}/>
        </svg>

        <form className={styles['form-container']}>
          <Input placeholder="Email" type="email" name="email"/>
          <Input placeholder="Password" type="password" name="password"/>
        </form>

        <Button>
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login
