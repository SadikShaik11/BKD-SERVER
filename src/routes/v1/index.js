const Router = require('express')
const AuthRoutes = require('../../Authentication/AuthRoutes.routes')
const router = Router()
/**
 * @ to login signup
 */
router.use('/', AuthRoutes)

router.get('/api', (req, res) => res.send('Default route'))
module.exports = router