import React from 'react'
import styles from "./pill.module.css"

export default function Pill({text, link}) {
  return (
    <button className={styles.pill}>{text}</button>
  )
}
