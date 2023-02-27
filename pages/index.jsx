import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone | Ntami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Feed />
    </div>
  )
}

export default Home
