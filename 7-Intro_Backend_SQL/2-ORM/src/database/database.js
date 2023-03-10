import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'railway', // Nombre de la base.
  'postgres', // Nombre de usuario.
  'ZuoReBtE1Cg5f2XZipQi', // Password.
  {
    host: 'containers-us-west-113.railway.app', // Servidor.
    port: '7685', // Puerto.
    dialect: 'postgres' // Dialecto. Aquí se puede usar cualquier tipo de base de datos. Sequelize se encarga de todo el rollo.
  }
)
