import { graphql } from 'msw'

export const allProductsQueryHandler = graphql.query('AllProductsQuery', (_req, res, ctx) => {
    return res(
        ctx.data({
            products: [
                {
                    id: '1',
                    name: 'Flockeet',
                    price: 100,
                    slug: 'Flockeet',
                    imageUrl: 'https://source.unsplash.com/random',
                    category: {
                        id: '1'
                    },
                    
                },
                {
                    id: '2',
                    name: 'Rewattler Pack 20KG',
                    price: 50,
                    slug: 'rewattler-pack-20kg',
                    imageUrl: 'https://source.unsplash.com/random',
                    category: {
                        id: '1'
                    }
                },
                {
                    id: '3',
                    name: 'Wardon Set',
                    price: 99,
                    slug: 'wardon-set',
                    imageUrl: 'https://source.unsplash.com/random',
                    category: {
                        id: '6'
                    }
                },
            ]
        }),
    )
})