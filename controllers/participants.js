exports.update = (req, res, next) => {
  const { participant_telephone, participant_code } = req.body
  const sql = `UPDATE participants SET participant_telephone = ? WHERE participant_code = ?`
  db.execute(sql, [participant_telephone, participant_code], (err, result) => {
    if (err) {
      return res.status(400).json(err)
    }
    res.status(200).json(result)
  })
}
