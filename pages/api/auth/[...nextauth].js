import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        // GitHub({
        //     clientId: process.env.GITHUB_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRET
        // }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: "/auth/signin"
    },
    callbacks: {
        async session({ session, token, user }) {
            session.user.username = session.user.name
            //remove the spaces, and change to lowercase
                .split(" ")
                .join("")
                .toLocaleLowerCase()
            
            session.user.uid = token.sub
            return session
        }
    }
})