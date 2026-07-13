import type { MutationRegisterUserArgs } from "../../generated/graphql";

export default {
  Mutation: {
    registerUser: (_parent: unknown, args: MutationRegisterUserArgs) => {
      console.log(args);
      console.log(args.registerInput);
    },
  },
};
