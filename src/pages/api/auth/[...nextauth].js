import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
    providers: [
        FacebookProvider({
            clientId: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
}
export default NextAuth(authOptions)