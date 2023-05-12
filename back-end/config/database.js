import { Sequelize } from 'sequelize';

const db = new Sequelize('react_school', 'root', '', {
    host: 'localhost',
    'dialect': 'mysql'
});
export default db;