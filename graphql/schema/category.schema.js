const graphql = require('graphql')
const { buildSchema } = graphql

const schemaCategory = buildSchema(`
    type Category {
        name: String
    }

    input CategoryInput{
        name: String
    }

    type Query {
        getCategory(id: ID!): Category,
        getCategories(): [Category]
    }

    type Mutation {
        createCategory(data: CategoryInput): Category,
        updateCategory(id:ID!, data: CategoryInput): Category,
        deleteCategory(id:ID!): Category
    }
`)

module.exports = schemaCategory