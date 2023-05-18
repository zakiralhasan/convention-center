"use client"
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Dashboard = () => {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/login')
        }
    })
    console.log(session, status)

    return (
        <div>
            <h1>Dashboard page</h1>

        </div>
    );
};

export default Dashboard;