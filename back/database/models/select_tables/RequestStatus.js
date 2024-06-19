import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class RequestStatus extends Model { };

RequestStatus.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'RequestStatus',
    tableName: 'request_status',
});