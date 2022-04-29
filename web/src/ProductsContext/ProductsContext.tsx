import { createContext, useState, useEffect } from "react";
import IInitialState from "./IInitalState";
import { useQuery } from "urql";

const initialState: IInitialState = {
  products: [],
  getProductPrice: (id: number): number => {
    return 0;
  },
  isLoading: true,
};

export const ProductsContext = createContext(initialState);

const productsQuery = `
  query {
    products {
      id
      name
      description
      price
      photo {
        name
      }
    }
  }
`;

const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState(initialState.products);
  const [result] = useQuery({ query: productsQuery });
  const [isLoading, setIsLoading] = useState(initialState.isLoading);

  const { data, error } = result;

  useEffect(() => {
    if (!error && data !== undefined) {
      setProducts(data.products);
      setIsLoading(false);
    }
  }, [data, error]);

  const getProductPrice = (id: number): number => {
    return products.find((product) => product.id === id)?.price || 0;
  };

  return (
    <ProductsContext.Provider value={{ products, getProductPrice, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
