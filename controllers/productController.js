const ProductModel = require('../models/ProductModel')

const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            const filteredProducts = await ProductModel.find({ category });
            res.json(filteredProducts)
        } else {
            const productData = await ProductModel.find().limit(10);
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

const createProduct = async (req, res) => {
    try {
        // console.log(req.body)
        //Insert into DB
        // const product = new ProductModel(req.body)
        // await product.save()

        //Alternate Method
        const product = await ProductModel.create(req.body)
        res.json({id: product._id})
    } catch (err) {
        if (err.code === 11000) {
            res.status(500).json({ message: "Duplicate title is not allowed" })
        }
        else {
            res.status(500).json({ message: err.message })
        }
    }
}

const replaceProduct = async (req, res) => {
    try {
        const {productID} = req.params
        const replacedProduct = await ProductModel.findOneAndReplace({_id:productID}, req.body, {new: true})
        res.json({replacedProduct})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const {productID} = req.params
        const updatedProduct = await ProductModel.findByIdAndUpdate(productID, req.body, {new: true})
        res.json({updatedProduct})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {productID} = req.params
        const deletedProduct = await ProductModel.findByIdAndDelete(productID)
        res.json({deletedProduct})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}