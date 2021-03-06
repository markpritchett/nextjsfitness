import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckl7qlbcuqhkx01wga2fkhaqp/master'
);

export async function getAllCategories() {
  const { categories } = await graphcms.request(
    `
      fragment SubcategoryFields on Category {
        id
        name
        slug
        imageSrc
      }
      
      fragment CategoriesRecursive on Category {
        categories {
          ...SubcategoryFields
          categories {
            ...SubcategoryFields
            categories {
              ...SubcategoryFields
            }
          }
        }
      }
      
      query AllCategoriesQuery {
        categories {
          ...SubcategoryFields
          ...CategoriesRecursive
          parent {
            id
          }
        }
      }
    `
  )

  return categories
}