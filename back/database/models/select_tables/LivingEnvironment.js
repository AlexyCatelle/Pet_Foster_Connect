import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class LivingEnvironment extends Model { };

LivingEnvironment.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'LivingEnvironment',
    tableName: 'living_environment',
});