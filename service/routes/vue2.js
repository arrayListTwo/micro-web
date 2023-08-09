const router = require('koa-router')()

router.prefix('/vue2')

router.get('/car/list', function (ctx, next) {
    // console.log(ctx)
    ctx.body = []
    // ctx.body = ctx.request.query
})

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
})

module.exports = router
