import sequelize from '../../database.js';
import { Model, DataTypes } from 'sequelize';

export class Request extends Model { }

Request.init({
    RequestStatusId: {
        type: DataTypes.INTEGER,
    },
    PetId: {
        type: DataTypes.INTEGER,
    },
    FamilyId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'Request',
    tableName: 'request',
})