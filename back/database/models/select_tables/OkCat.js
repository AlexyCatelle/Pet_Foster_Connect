import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class OkCat extends Model { };

OkCat.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'OkCat',
    tableName: 'ok_cats',
});