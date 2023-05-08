const pkg = require('./package')

module.exports = {
    apiPath: 'stubs/api',
    webpackConfig: {
        output: {
            publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
        }
    },
    navigations: {
        'kolorz.art.main': '/kolorz.art'
    },
    features: {
        'kolorz.art': {
            // add your features here in the format [featureName]: { value: string }
        },
    },
    devServer: {
        historyApiFallback: true,
    },
    config: {
        key: 'value'
    }
}
