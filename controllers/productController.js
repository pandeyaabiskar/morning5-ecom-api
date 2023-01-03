const productData = require('../data/productData.json')

const getAllProducts = (req, res) => {
    const { category } = req.query;
    if (category) {
        const filteredProducts = productData.filter((product) => {
            return product.category === category
        })
        res.json(filteredProducts)
    } else {
        res.json(productData)
    }
}

const getSingleProduct = (req, res) => {
    const { productID } = req.params
    if (productID > 0 && productID <= productData.length) {
        res.json(productData[productID - 1])
    } else {
        res.send("Index out of bound")
    }
}

const createProduct = (req, res) => {
    console.log(req.body)
    res.send("Data received successfully")
}

const replaceProduct = (req, res) => {
    console.log(req.body)
    res.send("Data received successfully")
}

const updateProduct = (req, res) => {
    console.log(req.body)
    res.send("Data received successfully")
}

const deleteProduct = (req, res) => {
    
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}