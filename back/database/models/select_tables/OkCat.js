import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class OkCat extends Model { };

OkCat.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'OkCat',
    tableName: 'ok_cats',
});