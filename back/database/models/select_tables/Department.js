import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class Department extends Model { };

Department.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
    code: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    }
}, {
    sequelize,
    modelName: 'Department',
    tableName: 'department',
});