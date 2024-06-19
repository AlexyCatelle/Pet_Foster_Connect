import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class DogSelect extends Model { };

DogSelect.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'DogSelect',
    tableName: 'dogSelect',
});