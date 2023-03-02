/* eslint-disable camelcase */
// Conexión a la base. Y aquí se hace porque aquí manejamos información sensible de la base de datos.
const { Pool } = require('pg')

const pool_zoo = new Pool({ // Con new se crea un objeto. Pool es conexión.
  host: 'localhost',
  user: 'postgres',
  password: 'chapito12',
  database: 'zoo',
  port: 5432
})

const getAllZoo = async (req, res) => {
  const response = await pool_zoo.query('SELECT * FROM zoos')
  res.status(300).json(response.rows)
}

const getOneZoo = async (req, res) => {
  const { id } = req.params
  let response
  try {
    response = await pool_zoo.query('SELECT * FROM zoos where id_zoo = $1', [id])
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  if (response.rows.length === 0) {
    res.status(404).json({
      error: 'Tu regristro no se encuentra en la base.'
    })
    return
  }

  res.status(200).json(response.rows)
}

const getZooBudget = async (req, res) => {
  let response
  try {
    response = await pool_zoo.query('SELECT zoo_name, budget FROM zoos ORDER BY budget DESC')
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  res.status(200).json(response.rows)
}

const getZooName = async (req, res) => {
  const { name } = req.body
  let response
  const sentenciaLike = '%' + name.toLowerCase() + '%'
  try {
    response = await pool_zoo.query('SELECT * FROM zoos WHERE LOWER(zoo_name) like $1', [sentenciaLike])
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  if (response.rows.length === 0) {
    res.status(404).json({
      error: 'Tu regristro no se encuentra en la base.'
    })
    return
  }

  res.status(200).json(response.rows)
}

const createZoo = async (req, res) => {
  const { zoo_name, city_id, zoo_size, budget } = req.body
  let response
  try {
    response = await pool_zoo.query('INSERT INTO zoos(zoo_name, city_id, zoo_size, budget) VALUES ($1, $2, $3, $4)', [zoo_name, city_id, zoo_size, budget])
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  res.status(200).json({ Transacción: 'Filas afectadas ->' + response.rowCount })
}

module.exports = {
  getAllZoo,
  getOneZoo,
  getZooBudget,
  getZooName,
  createZoo
}
