import React from 'react'
import styles from './Button.module.css'

// используем базовые встроенные свойста которые можно применять везде по умолчанию
export default function Button(props) {
  const { children, disabled = false } = props
  return (
    <button
      {...props}
      className={styles.button}
      children={children}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
