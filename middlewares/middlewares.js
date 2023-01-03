
const logger = (req, res, next) => {
    console.log("Hello")
    next()
}
const logger2 = (req, res, next) => {
    console.log("Hello2")
    next()
}

module.exports = {
    logger,
    logger2
}