import sequelize from "../../database.js";
import { Model, DataTypes } from 'sequelize';

export class UserPicture extends Model { };

UserPicture.init({
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
    }
}, {
    sequelize,
    modelName: 'UserPicture',
    tableName: 'user_picture',
});