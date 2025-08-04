import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import mongoose from "mongoose";
import { User } from "@/models/Users";


const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
            version: "2.0"
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const userEmail = user.email

            // if login then connect to database
            const client = await mongoose.connect("mongodb://localhost:27017/GetMeaChai");

            // check if user already exists in the database
            const currUser = await User.findOne({ email: userEmail })

            //if not then create a new user
            if (!currUser) {
                const newUser = new User({
                    name: user.name,
                    email: userEmail,
                    username: userEmail.split('@')[0],
                    coverpic: ""
                });

                await newUser.save();
                console.log(newUser);
            }

            return true; // allow sign in, this is compulsory
        }
    }
});

export { handler as GET, handler as POST };