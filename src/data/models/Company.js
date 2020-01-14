import DataType from 'sequelize';
import Model from '../sequelize';

const Company = Model.define(
  'Company',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    size: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    investors: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    ceo: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
  },
  {
    indexes: [{ fields: ['name'] }],
  },
);

export default Company;
