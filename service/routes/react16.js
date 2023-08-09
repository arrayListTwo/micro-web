const router = require('koa-router')()

router.prefix('/react16')

router.post('/login', function (ctx, next) {
    // console.log(ctx)
    // console.log(ctx.query.body)
    // ctx.body = ctx.request.body
    ctx.body = []
})

module.exports = router
