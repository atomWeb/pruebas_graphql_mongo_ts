import { Context } from "..";
import { ApolloError } from "apollo-server-errors";
import { User as UserEntity } from "../entity";

const resolvers: any = {
  Query: {
    message: () => "It works!",
    getUsers: async (_: any, args: any, { orm }: Context) => {
      console.log({ args });
      return await orm.userRepository.find();
    },
    getUser: async (_: any, args: any, ctx: Context) => {
      console.log(args.email);
      const orm = ctx.orm;
      const user = await orm.userRepository.manager.findOneBy(UserEntity, {
        email: args.email,
      });
      if (!user) {
        throw new ApolloError("No user found", "USER_NOT_FOUND");
      }
      return user;
    },
  },
  Mutation: {
    createUser: async (_: any, args: any, { orm }: Context) => {
      const { fullName, email, username, password } = args;
      const user = orm.userRepository.create();
      user.email = email;
      user.fullName = fullName;
      user.username = username;
      user.password = password;
      console.log({ user });
      return await orm.userRepository.save(user);
    },
  },
};
export default resolvers;
