import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class Race extends Model { };

Race.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    }
}, {
    sequelize,
    modelName: 'Race',
    tableName: 'race',
});