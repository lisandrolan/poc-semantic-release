module.exports = {
    branches: [
        "+([0-9])?(.{+([0-9]),x}).x",
        "master",
        "next",
        "next-major",
        {
            name: "integration",
            prerelease: true,
        },
        {
            name: "integration",
            prerelease: true,
        },
        {
            name: "staging",
            prerelease: true,
        },
    ],
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/github",
    ],
};