const browser = require('./renderer.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

browser.entry = './src/renderer.tsx';
browser.plugins.push(
    new HtmlWebpackPlugin({
        templateContent: `
            <html>
              <body>
                <div id="root"></div>
              </body>
            </html>`,
    }),
);

module.exports = browser;
