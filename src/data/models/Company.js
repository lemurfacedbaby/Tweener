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
    website: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    linkedin: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    pitch: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    industry: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    revenue: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    minorityLed: {
      type: DataType.BOOLEAN(),
      defaultValue: false,
    },
    minorityFounded: {
      type: DataType.BOOLEAN(),
      defaultValue: false,
    },
    region: {
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
    ceoName: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
    ceoEmail: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
  },
  {
    indexes: [{ fields: ['name'] }],
  },
);

export default Company;
