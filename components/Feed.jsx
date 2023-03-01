import { useSession } from 'next-auth/react'
import Posts from './Posts'
import SideProfile from './SideProfile'
import Stories from './Stories'
import Suggestions from './Suggestions'

const Feed = () => {

    const { data: session } = useSession()

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`}>

            <section className='col-span-2'>
                <Stories />
                <Posts />
            </section>

            {session && (
                <section className='md:col-span-1 hidden xl:inline-grid'>
                    <div className="fixed top-20">
                        <SideProfile />
                        <Suggestions />
                    </div>
                </section>
            )}

        </main>
    )
}

export default Feed