module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["localhost"],
    },
    async redirect() {
        return [
            {
                source: "/home",
                destination: "/",
            },
        ]
    },
}
