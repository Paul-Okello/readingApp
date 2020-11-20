const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

const books = [
  { name: "All Or Nothing", genre: "Fantasy", id: "1", authorId: "1" },
  { name: "Final Dance", genre: "Fantasy", id: "2", authorId: "2" },
  { name: "Twice As Tall", genre: "Fantasy", id: "3", authorId: "3" },
  { name: "Available", genre: "Fantasy", id: "4", authorId: "4" },
];
const authors = [
  { name: "John Bull", age: 44, id: "1" },
  { name: "Jeanie Buss", age: 34, id: "2" },
  { name: "Joseph Leting", age: 87, id: "3" },
  { name: "Louis Ceaser", age: 74, id: "4" },
];
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //Code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
