const faunadb = require('faunadb');

const secret = process.env.FAUNADB_SECRET_KEY
const q = faunadb.query
const client = new faunadb.Client({ secret })

export default  async (req, res) => {
  try {
    const dbs = await client.query(
      q.Login(
        q.Match(q.Index("users_by_email"), req.body.email),
        { password: req.body.password }
      )
    )

    return res.status(200).json(dbs);

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}