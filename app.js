const express = require('express');
const PORT = 4000;
const app = express();
const productRouter = require('./routes/productRoutes')

app.use('/api/products', productRouter)

app.all('*', (req, res) => {
    res.status(404). send("Page Not Found")
})
 
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})