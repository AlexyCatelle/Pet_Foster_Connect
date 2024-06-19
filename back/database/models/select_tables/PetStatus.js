import sequelize from "../../database.js";
import { Model, DataTypes } from 'sequelize';

export class PetStatus extends Model { };

PetStatus.init({
    label: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { // validateurs qui agiront au niveau des setter
            notEmpty: true,
        },
    },
}, {
    sequelize,
    modelName: 'PetStatus',
    tableName: 'pet_status',
});