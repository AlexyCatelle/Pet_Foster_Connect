import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class ChildrenUnder15 extends Model { };

ChildrenUnder15.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'ChildrenUnder15',
    tableName: 'children_under_15',
});