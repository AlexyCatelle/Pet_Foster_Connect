import sequelize from '../../database.js';
import { Model, DataTypes } from 'sequelize';


export class CatSelect extends Model { };

CatSelect.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'CatSelect',
    tableName: 'catSelect',
});