import { graphql } from 'msw'

export const handlers = [
    graphql.query('MainCategoriesQuery', (_req, res, ctx) => {
        // used https://randomwordgenerator.com/fake-word.php to generate some fake words
        return res(
            ctx.data({
                categories: [{
                    id: '1',
                    name: 'Flunges',
                    imageSrc: 'https://source.unsplash.com/CYyoMFLljJo',
                    slug: 'flunges'
                }, {
                    id: '2',
                    name: 'Groopsters',
                    imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                    slug: 'groopster'
                }, {
                    id: '3',
                    name: 'Goawhips',
                    imageSrc: 'https://source.unsplash.com/pCT8ag1o3nU',
                    slug: 'goawhipS'
                }, {
                    id: '4',
                    name: 'Ductorms',
                    imageSrc: 'https://source.unsplash.com/U00w3A4iC7c',
                    slug: 'ductorms'
                }]
            }),
        )
    }),
]