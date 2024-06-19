import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class OkDog extends Model { };

OkDog.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'OkDog',
    tableName: 'ok_dog',
});