import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class Role extends Model { };

Role.init({
    label: {
        type: DataTypes.TEXT,
    }
}, {
    sequelize,
    modelName: 'Role',
    tableName: "role"
});