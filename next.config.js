module.exports = {
    exportTrailingSlash: true,
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/i,
            use: 'raw-loader',
        });
        return config;
    },
    exportPathMap: function () {
        // shows.forEach(show => {
        //     paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
        //   });
        return {
            '/': { page: '/' }
        };
    }
};
