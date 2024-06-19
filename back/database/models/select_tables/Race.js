import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class Race extends Model { };

Race.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }
}, {
    sequelize,
    modelName: 'Race',
    tableName: 'race',
});