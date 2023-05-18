/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["i.ibb.co"],
        formats: ["image/webp"],
    },
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    env: {
        NEXTAUTH_URL: "http://localhost:3000"
    }
}

module.exports = nextConfig
