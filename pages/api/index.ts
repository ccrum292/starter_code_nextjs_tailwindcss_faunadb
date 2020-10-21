const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY
console.log(secret);
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default async (req, res) => {
  try {
    const dbs = await client.query(
      res.status(200).send("Connection Complete")
    )

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

