module.exports = {
    entry: "./dev/entry.js",
    output: {
        filename: "./public/build/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
