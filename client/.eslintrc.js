module.exports = {
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
    rules: {
        'vue/no-unused-vars': 'error',
        'vue/multi-word-component-names': 'off',
    },
}
