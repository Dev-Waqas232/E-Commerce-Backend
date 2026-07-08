type CreateUserArgs = {
  name: string;
};

const users = [
  {
    id: 1,
    name: "Ali",
  },
];

export default {
  Query: {
    users: () => {
      return users;
    },
  },
  Mutation: {
    createUser: (_parent: unknown, args: CreateUserArgs) => {
      const { name } = args;

      const newUser = {
        name,
        id: users.length + 1,
      };

      users.push(newUser);

      return users;
    },
  },
};
