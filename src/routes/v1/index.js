const Router = require('express')
const UserRoutes = require('../../modules/users/Users.routes')
const router = Router()
/**
 * @ to login signup
 */
router.use('/user', UserRoutes)

// router.get('/api', (req, res) => res.send('Default route'))


module.exports = router