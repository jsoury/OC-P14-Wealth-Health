import React from 'react'
import logo from '@/assets/pictures/logo-wealth-health.png'
import style from './nav.module.scss'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link to="" className={style.nav__logo}>
        <img src={logo} alt="logo wealth health"></img>
        <h1 className="sr-only">Wealth Health HR-Net</h1>
      </Link>
      <div>
        <Link to="/employee/create" className={style.nav__item}>
          create employee
        </Link>
        <Link to="/employee/list" className={style.nav__item}>
          View Current Employees
        </Link>
      </div>
    </nav>
  )
}

export default Nav
