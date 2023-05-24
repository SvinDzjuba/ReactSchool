import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';

class User extends Model { }
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING },
        refresh_token: { type: DataTypes.TEXT }
    },
    {
        sequelize: db,
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        freezeTableName: true,
    }
);
export default User;