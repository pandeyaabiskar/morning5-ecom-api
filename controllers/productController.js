const ProductModel = require('../models/ProductModel')

const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            const filteredProducts = await ProductModel.find({ category });
            res.json(filteredProducts)
        } else {
            const productData = await ProductModel.find();
            res.json(productData)
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const { productID } = req.params
        const productData = await ProductModel.find({ _id: productID })
        res.json(productData)
    }catch(err){
        res.status(500).json({message: err.message})
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