import sequelize from '../../database.js';
import { Model, DataTypes } from 'sequelize';

export class Association extends Model { }

Association.init({
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
    link: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    socialReason: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    UserId: {
        type: DataTypes.INTEGER,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'Association',
    tableName: 'association',
});