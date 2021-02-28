import { GraphQLClient } from 'graphql-request'

const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ckl7qlbcuqhkx01wga2fkhaqp/master'
);

export async function getMainCategories() {
    const { categories } = await graphcms.request(
        `
        query MainCategoriesQuery {
          categories(where: {parent: null}) {
            id
            name,
            imageSrc,
            slug
          }
        }
        `
    )

    return categories
}