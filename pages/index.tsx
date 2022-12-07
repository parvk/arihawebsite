import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <p>This is header</p>
      <p>This is section 1</p>
      <p>This is section 2</p>
      <p>This is section 3</p>
    </div>
  )
}
