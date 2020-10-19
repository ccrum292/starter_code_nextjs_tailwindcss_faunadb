const db = require("../../../../db/db")
const escape = require("sql-template-strings")

module.exports = (req, res) => {
  console.log(req.query)
  // const {
  //   query: {productId}
  // } = req
  if(!req.query.productId){
    res.status(404).send("no product id was given")
  }


  res.status(200).send(`id: ${req.query.productId}`)
}