"use client"

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    );
};

export default AuthProvider;