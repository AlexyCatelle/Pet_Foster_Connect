import sequelize from '../../database.js';
import { Model, DataTypes } from 'sequelize';

export class Pet extends Model { }

Pet.init({
    name: {
        type: DataTypes.TEXT,
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
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    okApartment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    sterilized: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    zipcode: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    RaceId: {
        type: DataTypes.INTEGER,
    },
    SpeciesId: {
        type: DataTypes.INTEGER,
    },
    OkDogId: {
        type: DataTypes.INTEGER,
    },
    OkCatId: {
        type: DataTypes.INTEGER,
    },
    OkChildId: {
        type: DataTypes.INTEGER,
    },
    AssociationId: {
        type: DataTypes.INTEGER,
    },
    PetStatusId: {
        type: DataTypes.INTEGER,
    },
    DepartmentId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'Pet',
    tableName: 'pet',
}
);