
import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/app/config/dbConnect";
import User from "@/app/models/user";
import bcrypt from "bcryptjs"

export const authOptions = {
    // session: {
    //     strategy: 'jwt'
    // },
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_CLIENT_ID,
        //     clientSecret: process.env.GITHUB_CLIENT_SECRETS,
        // }),

        CredentialsProvider({
            async authorize(credentials, req) {
                connectToDB()
                const { email, password } = credentials;
                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error("Invalid Email or Password")
                }

                const isPasswordMatched = await bcrypt.compare(password, user.password)

                if (!isPasswordMatched) {
                    throw new Error("Invalid Email or Password")
                }

                return user;
            }
        })
    ],
    pages: {
        login: '/app/login'
    }
}

const handler = NextAuth(authOptions)
// const handler = NextAuth({
//     session:{
//         strategy: 'jwt'
//     }
// })
export { handler as GET, handler as POST }