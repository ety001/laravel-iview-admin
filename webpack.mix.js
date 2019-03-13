const mix = require('laravel-mix');

mix.js('resources/js/admin.js', 'public/static')
    .sass('resources/sass/admin.scss', 'public/static')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
                '_c': path.resolve(__dirname, 'resources/js/components'),
            },
        },
        output: {
            chunkFilename: 'static/chunks/[name].js',
        },
    })
    .babelConfig({
        "presets": [
            "@vue/app",
        ],
    })
    .version();
