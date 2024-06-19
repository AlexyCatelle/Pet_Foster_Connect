import sequelize from "../../database.js";
import { Model, DataTypes } from 'sequelize';

export class FamilyPicture extends Model { };

FamilyPicture.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
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
    FamilyId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'FamilyPicture',
    tableName: 'family_picture',
});