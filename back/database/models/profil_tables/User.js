import sequelize from '../../database.js';
import { Model, DataTypes } from 'sequelize';

export class User extends Model { }

User.init({
    pseudo: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    mail: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: {
                msg: "Adresse email invalide",
            },
        },
    },
    // IL FAUDRA GERER LA SECURITE DES DONNEES
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    streetNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    streetName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    city: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    RoleId: {
        type: DataTypes.INTEGER,
    },
    UserPictureId: {
        type: DataTypes.INTEGER,
    },
    FamilyId: {
        type: DataTypes.INTEGER,
    },
    RequestId: {
        type: DataTypes.INTEGER,
    },
    acceptCondition: {
        type: DataTypes.TEXT,
    },
    notARobot: {
        type: DataTypes.TEXT,
    }
},
    {
        sequelize,
        modelName: 'User',
        tableName: 'user',

    });

