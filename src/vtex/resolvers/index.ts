import { default as StoreProductResolver } from "./product";

const resolvers = {
  ...StoreProductResolver,
};

console.log(process.env.FOO)

export default resolvers;