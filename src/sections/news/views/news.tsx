import React from 'react'
import styles from '@/shared/styles/globals.module.css'
import { Header, Middle } from '../components'

function News () {
  return (
    <div className={styles.container}>
      <Header />
      <Middle />
    </div>
  )
}

export default News
