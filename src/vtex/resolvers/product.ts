import type { StoreProductRoot } from "@faststore/api";

console.log(process.env.FOO)

const productResolver = {
  StoreProduct: {
    customData: (root: StoreProductRoot) => {
      return "My item id: " + root.itemId;
    },
  },
};

export default productResolver;