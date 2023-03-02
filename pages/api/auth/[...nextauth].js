import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export default NextAuth({
    providers: [
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
    },
    secret: process.env.NEXTAUTH_SECRET
})