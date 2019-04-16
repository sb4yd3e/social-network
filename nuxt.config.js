module.exports = {
    server: {
        port: process.env.OPENSHIFT_NODEJS_PORT || 8080,
        host: process.env.OPENSHIFT_NODEJS_IP || 'localhost'
    },
    head: {
        htmlAttrs: {
            lang: 'ru'
        },
        title: 'СОЦИАЛЬНАЯ СЕТЬ',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'vue.js + nuxt.js + postcss + node.js + mongoDB'
            },
            {
                hid: 'og:title',
                property: 'og:title',
                content: 'СОЦИАЛЬНАЯ СЕТЬ'
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'vue.js + nuxt.js + postcss + node.js + mongoDB'
            }
        ],
        link: [
            { rel: 'shortcut icon', href: '/images/favicon.png' },
            { rel: 'icon', href: '/images/favicon.png' }
        ]
    },
    loading: { color: '#000000' },
    css: ['@/assets/styles/app.css'],
    build: {
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        },
        vendor: ['axios'],
        postcss: [
            require('postcss-import')(),
            require('postcss-nested')(),
            require('postcss-custom-media')(),
            require('postcss-custom-properties')({
                preserve: false
            }),
            require('css-mqpacker')(),
            require('autoprefixer')(),
            require('cssnano')()
        ]
    },
    modules: ['@nuxtjs/svg-sprite'],
    plugins: [{ src: '~/assets/scripts/app.js', ssr: false }],
    serverMiddleware: [
        '~/api/index.js'
    ]
};