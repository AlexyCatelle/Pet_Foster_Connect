import sequelize from '../../database.js';
import { Model, DataTypes } from 'sequelize';

export class Family extends Model { }

Family.init({
    lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
    firstname: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
        },
    },
    petExperience: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    motivation: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    homeDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    livingSpace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    outdoorSpace: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    vehicle: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    securedWindows: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    nac: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    nacDetail: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            notEmpty: true,
        },
    },
    HousingId: {
        type: DataTypes.INTEGER,
    },
    LivingEnvironmentId: {
        type: DataTypes.INTEGER,
    },
    OutdoorTypeId: {
        type: DataTypes.INTEGER,
    },
    ChildrenUnder15Id: {
        type: DataTypes.INTEGER,
    },
    CatSelectId: {
        type: DataTypes.INTEGER,
    },
    DogSelectId: {
        type: DataTypes.INTEGER,
    },
    UserId: {
        type: DataTypes.INTEGER,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'Family',
    tableName: 'family',
});