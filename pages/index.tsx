import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Board from '../components/Board'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Board />
      </main>

    </div>
  )
}

export default Home
