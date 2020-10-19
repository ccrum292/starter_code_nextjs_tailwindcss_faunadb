const db = require("../../../../db/db")
const escape = require("sql-template-strings")

module.exports = (req, res) => {
  // console.log(req.query)
  // const {
  //   query: {productId}
  // } = req


  res.status(200).send(`id: Hello from index`)
}