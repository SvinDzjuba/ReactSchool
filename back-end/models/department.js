import db from '../config/database.js';
import { DataTypes, Model } from 'sequelize';

class Department extends Model { }
Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    },
    {
        sequelize: db,
        tableName: 'departments',
        timestamp: true,
        modelName: 'Department',
        freezeTableName: true
    }
);
export default Department;