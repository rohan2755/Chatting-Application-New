const express = require('express')
const { registerUser, loginUser } = require('../controller/user')
const searchUser = require('../controller/searchUser')


const router = express.Router()

router.post('/register-user', registerUser)
router.post('/login', loginUser)
router.post('/search-user', searchUser)

module.exports = router