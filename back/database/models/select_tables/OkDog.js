import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class OkDog extends Model { };

OkDog.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'OkDog',
    tableName: 'ok_dog',
});