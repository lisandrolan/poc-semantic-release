module.exports = {
    branches: [
        "+([0-9])?(.{+([0-9]),x}).x",
        "master",
        "next",
        "next-major",
        {
            name: "integration",
            channel: "integration",
            prerelease: true,
        },
        {
            name: "staging",
            channel: "staging",
            prerelease: true,
        },
        {
            name: "feature*",
            channel: "development",
            prerelease: true
        }
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/github",
    ],
};