const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default  async (req, res) => {
  try {
    const userRef = await client.query(
      q.KeyFromSecret(req.headers.token)
    )
    const userData = await client.query(
      q.Get(userRef.instance)
    )
    return res.status(200).json(userData);

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}