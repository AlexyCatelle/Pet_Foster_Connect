import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database.js';

export class OutdoorType extends Model { };

OutdoorType.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'OutdoorType',
    tableName: 'outdoor_type',
});