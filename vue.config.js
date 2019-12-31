module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-js-task-list/' // prod
    : '/', // dev
}