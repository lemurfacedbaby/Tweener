import { Company } from 'data/models';

export const mutation = [
  `
  # Creates a new company in the db
  databaseCreateCompany(

    name: String!

    size: String!

    investors: String!

    ceo: String!

  ): DatabaseCompany
`,
];

export const resolvers = {
  Mutation: {
    async databaseCreateCompany(parent, args) {
      // If company already exists, throw error
      const lookupCompany = await Company.findOne({
        where: { name: args.name },
      });

      if (lookupCompany) {
        // eslint-disable-next-line no-throw-literal
        throw 'Company already exists!';
      }

      // Create new user with profile in database
      const user = await Company.create({
        name: args.name,
        size: args.size,
        investors: args.investors,
        ceo: args.ceo,
        contact: args.contact,
      });

      return user;
    },
  },
};
