const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/Authenticate/Login', {
            target: 'http://201.48.119.97:9090/api',
            changeOrigin: true
        })
    )

    app.use(
        createProxyMiddleware('/BSVisitors/GetVisitors', {
            target: 'http://201.48.119.97:9090/api',
            changeOrigin: true
        })
    )

    app.use(
        createProxyMiddleware('/BSTables/GetTables', {
            target: 'http://201.48.119.97:9090/api',
            changeOrigin: true
        })
    )

    app.use(
        createProxyMiddleware('/weatherforecast', {
            target: 'http://201.48.119.97:9090/api',
            changeOrigin: true
        })
    );

}