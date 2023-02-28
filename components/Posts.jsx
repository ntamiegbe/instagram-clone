import SinglePost from "./SinglePost"

const postData = [
    {
        id: '123',
        username: 'Ntami Egbe',
        profilePic: 'https://links.papareact.com/jjm',
        image: 'https://links.papareact.com/jjm',
        caption: "I'm getting better at programming"
    },
    {
        id: '123',
        username: 'Ntami Egbe',
        profilePic: 'https://links.papareact.com/jjm',
        image: 'https://links.papareact.com/ocw',
        caption: "I'm getting better at programming"
    },
    {
        id: '123',
        username: 'Ntami Egbe',
        profilePic: 'https://links.papareact.com/jjm',
        image: 'https://links.papareact.com/jjm',
        caption: "I'm getting better at programming"
    },
    {
        id: '123',
        username: 'Ntami Egbe',
        profilePic: 'https://links.papareact.com/jjm',
        image: 'https://links.papareact.com/ocw',
        caption: "I'm getting better at programming"
    },
    {
        id: '123',
        username: 'Ntami Egbe',
        profilePic: 'https://links.papareact.com/jjm',
        image: 'https://links.papareact.com/jjm',
        caption: "I'm getting better at programming"
    },
    {
        id: '123',
        username: 'Ntami Egbe',
        profilePic: 'https://links.papareact.com/jjm',
        image: 'https://links.papareact.com/jjm',
        caption: "I'm getting better at programming"
    },
]

const Posts = () => {
  return (
    <div>
        {postData.map((post) => (
            <SinglePost key={post.id} id={post.id} username={post.username} profilePic={post.profilePic} image={post.image} caption={post.caption}/>
        ))}
    </div>
  )
}

export default Posts