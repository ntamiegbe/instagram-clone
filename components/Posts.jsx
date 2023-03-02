import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"


const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs)
        })

    }, [db])


    return (
        <div>
            {posts.map((post) => (
                <SinglePost
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    profilePic={post.data().profileImage}
                    image={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    )
}

export default Posts