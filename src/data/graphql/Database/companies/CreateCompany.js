import { Company } from 'data/models';

export const mutation = [
  `
  # Creates a new company in the db
  databaseCreateCompany(

    name: String!

    size: String

    investors: String

    ceo: String
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
        ceoName: args.ceoName,
        linkedin: args.linkedin,
        ceoEmail: args.ceoEmail,
        website: args.website,
        industry: args.industry,
        pitch: args.pitch,
        revenue: args.revenue,
        minorityLed: args.minorityLed,
        minorityFounded: args.minorityFounded,
        region: args.region,
      });

      return user;
    },
  },
};
