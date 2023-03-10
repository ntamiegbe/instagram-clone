import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Clone | Ntami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Feed />

      <Modal />
    </div>
  )
}

export default Home
