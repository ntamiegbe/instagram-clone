import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    pages: {
        signIn: "/auth/signin"
    }
})