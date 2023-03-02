/* eslint-disable camelcase */
import { Zoo } from '../models/zoos.js'
import { City } from '../models/cities.js'
import { Country } from '../models/countries.js'
import { Continent } from '../models/continents.js'
import { Refugee } from '../models/refugees.js'
import { Animal } from '../models/animals.js'
import { Specie } from '../models/species.js'
import { Op } from 'sequelize'

// export const getMain = (req, res) => {
//   res.write('<html> <body> <img src= \'https://http.cat/200\'> </body> </html>')
// }
export const getAllZoo = async (req, res) => {
  let response
  try {
    response = await Zoo.findAll({
    // where: { id_zoo: 1 }
      // attributes: ['id_zoo', 'zoo_name', 'zoo_size', 'budget'],
      attributes: { exclude: ['city_id'] },
      include: [
        {
          model: City,
          attributes: ['city_name'],
          include: {
            model: Country,
            attributes: ['country_name'],
            include: {
              model: Continent,
              attributes: ['continent_name'],
              include: { model: Animal }
            }
          }
        }
      ]
    }) // Dinamic Query.
  } catch (e) {
    res.status(500).json({ Error: e.message })
  }
  res.status(200).json(response)
}

export const getOneZoo = async (req, res) => {
  const { id } = req.params
  let response
  try {
    response = await Zoo.findByPk(id) // Dinamic Query.
    // response = await Zoo.findAll({
    //  where: { id_zoo: id}
    // })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }

  if (response === null) {
    res.status(404).json({
      error: 'Tu regristro no se encuentra en la base.'
    })
    return
  }
  res.status(200).json(response)
}

export const getZooBudget = async (req, res) => {
  let response
  try {
    // ('SELECT zoo_name, budget FROM zoos ORDER BY budget DESC')
    response = await Zoo.findAll({
      attributes: ['zoo_name', 'budget', 'city_id'], order: [['budget', 'DESC']]
      // attributes: { exclude: ['zoo_name', 'budget', 'city_id'] }
      // attributes: { include: [''] } debe agregar nuevas filas a la lista que ya está por default.
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  res.status(200).json(response)
}

export const getRefugee = async (req, res) => {
  let response
  try {
    response = await Refugee.findAll({
      include: [
        { model: Zoo },
        {
          model: Specie,
          include: {
            model: Animal,
            include: { model: Continent }
          }
        }
      ]
    })
  } catch (e) {
    res.status(500).json({ Error: e.message })
  }
  res.status(200).json(response)
}

// export const getZooSpecies = async (req, res) => {
//   let response
//   try {
//     response = await Zoo.findAll({

//     })
//   } catch (e) {
//     res.status(500).json({ error: e.message })
//   }
// }

export const getZooName = async (req, res) => {
  const { name } = req.body
  let response
  const sentenciaLike = '%' + name.toLowerCase() + '%'
  try {
    // ('SELECT * FROM zoos WHERE LOWER(zoo_name) like $1', [sentenciaLike])
    response = await Zoo.findAll({
      where: {
        zoo_name: { [Op.iLike]: sentenciaLike }
      }
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  if (response.length === 0) {
    res.status(404).json({
      error: 'Tu regristro no se encuentra en la base.'
    })
    return
  }

  res.status(200).json(response)
}

export const createZoo = async (req, res) => {
  const { zoo_name, city_id, zoo_size, budget } = req.body
  let response
  try {
    // 'INSERT INTO zoos(zoo_name, city_id, zoo_size, budget) VALUES ($1, $2, $3, $4)', [zoo_name, city_id, zoo_size, budget])
    response = await Zoo.create({
      zoo_name,
      city_id, // Como tienen el nombre en la petición y en la base de datos, va directo.
      zoo_size,
      budget
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
    return
  }
  res.status(200).json({ 'Registro exitoso': response.dataValues })
}

export const deleteZoo = async (req, res) => {
  const { id_zoo } = req.params
  let response
  try {
    response = await Zoo.destroy({
      where: { id_zoo }
    })
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
  res.status(200).json({ 'Estado Transacción': response })
}
