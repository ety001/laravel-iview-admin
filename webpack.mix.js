const mix = require('laravel-mix');
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );

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
        plugins: [
            new SimpleProgressWebpackPlugin()
        ],
    })
    .babelConfig({
        presets: ['@vue/babel-preset-jsx'],
        // plugins: [mix.inProduction() ? '@babel/plugin-syntax-dynamic-import' : 'dynamic-import-node'],
        plugins: ['dynamic-import-node'],
    })
    .version();
