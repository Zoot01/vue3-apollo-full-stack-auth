module.exports = {
    client: {
        service: {
            name: 'my-vue-app',
            // URL to the GraphQL API
            url: 'http://localhost:2323/graphql',
        },
        // Files processed by the extension
        includes: ['src/**/*.vue', 'src/**/*.ts'],
    },
}
