import sequelize from "../../database.js";
import { Model, DataTypes } from 'sequelize';

export class PetPicture extends Model { };

PetPicture.init({
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
    PetId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'PetPicture',
    tableName: 'pet_picture',
});