import { getProviders, signIn as signToProvider } from "next-auth/react"

const signIn = ({ providers }) => {
  return (
    <div className=''>
      {
        Object.values(providers).map((provider) => (
          <div className="" key={provider.name}>
            <button onClick={() => signToProvider(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))
      }
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