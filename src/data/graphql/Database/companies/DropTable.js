import { Company } from 'data/models';

export const schema = [
  `
  # A company stored in the local database
  type DatabaseCompany {
    id: String
    name: String
    size: String
    investors: String
    ceo: String
    contact: String
    pitch: String
    website: String
    updartedAt: String
    createdAt: String
  }`,
];

export const mutation = [
  `
  databaseDeleteCompany(
    name: String!
  )
`,
];

export const resolvers = {
  Mutation: {
    async databaseDeleteCompany() {
      await Company.drop();
      // If company already exists, throw error
      /** const lookupCompany = await Company.findOne({ where: { name: args.name } });

      if (lookupCompany) {
        // eslint-disable-next-line no-throw-literal
        throw 'Company already exists!';
      }


      // Create new user with profile in database
      const user = await Company.create(
        {
          name: args.name,
          size: args.size,
          investors: args.investors,
          ceo: args.ceo,
          contact: args.contact,
        },
      ); */

      // return user;
    },
  },
};
