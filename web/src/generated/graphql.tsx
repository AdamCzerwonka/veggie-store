import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};



export type AddOrderInput = {
  name: Scalars['String'];
  surname: Scalars['String'];
  city: Scalars['String'];
  zip: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  apartmentNumber?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  items: Array<AddOrderItemInput>;
};

export type AddOrderItemInput = {
  productId: Scalars['Int'];
  amount: Scalars['Float'];
};

export type AddOrderPayload = {
  __typename?: 'AddOrderPayload';
  status?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  name: Scalars['String'];
  surname: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  city: Scalars['String'];
  zip: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  apartmentNumber?: Maybe<Scalars['String']>;
  houseNumber?: Maybe<Scalars['String']>;
  status: OrderStatus;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  orderItems?: Maybe<Array<Maybe<OrderItem>>>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  id: Scalars['Int'];
  orderId: Scalars['Int'];
  productId: Scalars['Int'];
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product?: Maybe<Product>;
  order?: Maybe<Order>;
};

export type OrderMutation = {
  __typename?: 'OrderMutation';
  addOrder?: Maybe<AddOrderPayload>;
};


export type OrderMutationAddOrderArgs = {
  input?: Maybe<AddOrderInput>;
};

export enum OrderStatus {
  Processing = 'PROCESSING',
  Verified = 'VERIFIED',
  Sent = 'SENT',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Problem = 'PROBLEM'
}

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  product?: Maybe<Product>;
};

/** Represents product in shop db */
export type Product = {
  __typename?: 'Product';
  photo?: Maybe<Photo>;
  id: Scalars['Int'];
  name: Scalars['String'];
  description: Scalars['String'];
  img: Scalars['String'];
  price: Scalars['Float'];
  amountInStock: Scalars['Float'];
  orderItems?: Maybe<Array<Maybe<OrderItem>>>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Maybe<Product>>>;
};

export type AddOrderMutationVariables = Exact<{
  name: Scalars['String'];
  surname: Scalars['String'];
  city: Scalars['String'];
  zip: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  houseNumber: Scalars['String'];
  email: Scalars['String'];
  phoneNumber: Scalars['String'];
  apartmentNumber?: Maybe<Scalars['String']>;
  items: Array<AddOrderItemInput> | AddOrderItemInput;
}>;


export type AddOrderMutation = (
  { __typename?: 'OrderMutation' }
  & { addOrder?: Maybe<(
    { __typename?: 'AddOrderPayload' }
    & Pick<AddOrderPayload, 'status' | 'errors'>
  )> }
);


export const AddOrderDocument = gql`
    mutation AddOrder($name: String!, $surname: String!, $city: String!, $zip: String!, $street: String, $houseNumber: String!, $email: String!, $phoneNumber: String!, $apartmentNumber: String, $items: [AddOrderItemInput!]!) {
  addOrder(
    input: {name: $name, surname: $surname, city: $city, zip: $zip, street: $street, houseNumber: $houseNumber, email: $email, phoneNumber: $phoneNumber, apartmentNumber: $apartmentNumber, items: $items}
  ) {
    status
    errors
  }
}
    `;

export function useAddOrderMutation() {
  return Urql.useMutation<AddOrderMutation, AddOrderMutationVariables>(AddOrderDocument);
};