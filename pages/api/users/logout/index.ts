const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default  async (req, res) => {
  try {
    const dbs = await client.query(
      q.Logout(true)
    )

    return res.status(200).json(dbs);

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}