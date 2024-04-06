const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')//midleware es como una capa antes, que podemosutilizar para proteger 
// o dejar pasar algo, es algo intermedio 
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/tracks')
const { validateCreate } = require('../validators/users')

router.get('/', checkAuth, getItems) //TODO: http://localhost:3001/api/1.0/tracks 🔴🔴
// la midleware (checkAuth) se encarga de verificar si en la peticcion http que vamos a utilizar existe un token 
router.get('/:id', checkOrigin, getItem)

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router