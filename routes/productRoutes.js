const express = require('express')
const router = express.Router();
const {
    getAllProducts,
    getSingleProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')
const {logger, logger2} = require('../middlewares/middlewares')

router.get('/', [logger, logger2] , getAllProducts)
router.get('/:productID', getSingleProduct)
//To store data coming from user
router.post('/', createProduct)
//Update existing data
router.put('/:productID', replaceProduct)
//Update existing data
router.patch('/:productID', updateProduct)
//Delete existing data
router.delete('/:productID', deleteProduct)

module.exports = router;