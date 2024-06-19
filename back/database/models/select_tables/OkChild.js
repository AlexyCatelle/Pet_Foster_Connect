import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class OkChild extends Model { };

OkChild.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'OkChild',
    tableName: 'ok_children',
});