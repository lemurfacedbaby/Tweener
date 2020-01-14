import { merge } from 'lodash';

/** * Queries ** */
import {
  schema as GetAllUsers,
  queries as GetAllUsersQueries,
  resolvers as GetAllUsersResolver,
} from './users/GetAllUsers';
import {
  queries as GetLoggedInUserQueries,
  resolvers as GetLoggedInUserResolver,
} from './users/GetLoggedInUser';
import {
  schema as GetAllCompanies,
  queries as GetAllCompaniesQueries,
  resolvers as GetAllCompaniesResolver,
} from './companies/GetAllCompanies';
/**
import {
  schema as DropTableInput,
  mutation as DropTable,
  resolvers as DropTableResolvers,
} from './companies/DropTable';
*/
/** * Mutations ** */
import {
  schema as CreateUserInput,
  mutation as CreateUser,
  resolvers as CreateUserResolver,
} from './users/CreateUser';

import {
  mutation as CreateCompany,
  resolvers as CreateCompanyResolver,
} from './companies/CreateCompany';

export const schema = [...GetAllUsers, ...CreateUserInput, ...GetAllCompanies];

export const queries = [
  ...GetAllUsersQueries,
  ...GetLoggedInUserQueries,
  ...GetAllCompaniesQueries,
];

export const mutations = [...CreateUser, ...CreateCompany];

export const resolvers = merge(
  GetAllCompaniesResolver,
  GetAllUsersResolver,
  GetLoggedInUserResolver,
  CreateUserResolver,
  CreateCompanyResolver,
);
