const db = require('../config/mysqlConn')

exports.post = (req, res) => {
  const { projet_description, sous_programme_id } = req.body
  const sql = `INSERT INTO projets(projet_description, sous_programme_id) VALUES ('Projet Dart', 4)`
  db.query(sql, [projet_description, sous_programme_id], (err, result) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(result)
  })
}

exports.getAll = (req, res) => {
  const sql = `SELECT * FROM projets`
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).json(err)
    }
    res.status(200).json(result)
  })
}
