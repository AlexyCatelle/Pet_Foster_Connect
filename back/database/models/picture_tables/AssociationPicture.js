import sequelize from "../../database.js";
import { Model, DataTypes } from 'sequelize';

export class AssociationPicture extends Model { };

AssociationPicture.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    path: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    alt: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    AssociationId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'AssociationPicture',
    tableName: 'AssociationPicture',
});