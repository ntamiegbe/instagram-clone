import { getProviders, signIn as signToProvider } from "next-auth/react"
import Navbar from "../../components/Navbar"
import Image from "next/image"

const signIn = ({ providers }) => {
  return (
    <div className='bg-gray-50 h-screen'>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen -mt-40">

        <Image src="https://links.papareact.com/jjm" width={100} height={100} alt="Logo" />
        <div className="mt-20">
          {
            Object.values(providers).map((provider) => (
              <div className="" key={provider.name}>
                <button onClick={() => signToProvider(provider.id, { callbackUrl: '/' })} className="flex shadow-sm px-4 bg-white py-2 items-center border rounded-md font-semibold hover:scale-105 transition-all duration-150 ease-out">
                  <img src="https://rb.gy/nj8u4n" alt="Logo" className="w-10 h-10 mr-2" /> Sign in with {provider.name}
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers
    }
  }
}

export default signIn