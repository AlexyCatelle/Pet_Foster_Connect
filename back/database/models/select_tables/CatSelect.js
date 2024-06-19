import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class CatSelect extends Model { };

CatSelect.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'CatSelect',
    tableName: 'catSelect',
});