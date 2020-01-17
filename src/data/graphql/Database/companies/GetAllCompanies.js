import { Company } from 'data/models';

export const schema = [
  `
  # A company stored in the local database
  type DatabaseCompany {
    id: String
    name: String
    size: String
    investors: String
    ceoName: String
    ceoEmail: String
    website: String
    linkedin: String
    industry: String
    pitch: String
    revenue: String
    minorityLed: Boolean
    minorityFounded: Boolean
    region: String
  }
`,
];

export const queries = [
  `
  databaseGetAllCompanies: [DatabaseCompany]
`,
];

export const resolvers = {
  RootQuery: {
    async databaseGetAllCompanies() {
      const companies = await Company.findAll();
      return companies;
    },
  },
};
