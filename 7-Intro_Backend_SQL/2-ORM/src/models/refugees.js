import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Zoo } from './zoos.js'
import { Specie } from './species.js'
export const Refugee = sequelize.define('refugees', {
  id_refugee: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  specie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'species',
      key: 'id_specie'
    }
  },
  zoo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'zoos',
      key: 'id_zoo'
    }
  }
}, {
  sequelize,
  tableName: 'refugees',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: 'pk_refugee',
      unique: true,
      fields: [
        { name: 'id_refugee' }
      ]
    }
  ]
})

Refugee.hasMany(Zoo, {
  foreignKey: 'id_zoo',
  sourceKey: 'zoo_id'
})

Refugee.hasMany(Specie, {
  foreignKey: 'id_specie',
  sourceKey: 'specie_id'
})
