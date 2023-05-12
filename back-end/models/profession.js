import db from '../config/database.js';
import { DataTypes, Model } from "sequelize";
import Department from './department.js';

class Profession extends Model { }
Profession.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        education: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    },
    {
        sequelize: db,
        timestamps: true,
        tableName: 'professions',
        modelName: 'Profession',
        freezeTableName: true
    }
);
Profession.belongsTo(Department, { foreignKey: 'department_id', as: 'department' });
Department.hasMany(Profession, { as: 'profession', foreignKey: 'department_id' });

export default Profession;