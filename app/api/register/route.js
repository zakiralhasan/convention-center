import User from "../../models/user";
import { connectToDB } from "../../config/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    if (req.method === 'POST') {
        connectToDB()
        const body = await req.json()
        const { name, email, password } = body;
        const user = await User.create({ name, email, password });

        console.log(res.params)
        return NextResponse.json(user);
    } else {
        console.log('not post')
    }
}