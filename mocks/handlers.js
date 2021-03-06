import { graphql } from 'msw'

export const handlers = [
    graphql.query('AllCategoriesQuery', (_req, res, ctx) => {
        // used https://randomwordgenerator.com/fake-word.php to generate some fake words
        return res(
            ctx.data({
                categories: [
                    {
                        id: '1',
                        name: 'Flunges',
                        slug: 'flunges',
                        imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                        categories: [],
                        parent: null
                    },
                    
                    {
                        id: '2',
                        name: 'Groopsters',
                        slug: 'groopsters',
                        imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                        categories: [
                            {
                                id: '5',
                                name: 'Go Go Goxes',
                                slug: 'go-go-goxes',
                                categories: [
                                    {
                                        id: '6',
                                        name: 'Corroticks',
                                        slug: 'corroticks',
                                        categories: []
                                    }
                                ]
                            }
                        ],
                        parent: null
                    },
                    
                    {
                        id: '3',
                        name: 'Goawhips',
                        slug: 'goawhips',
                        imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                        categories: [],
                        parent: null
                    },
                    {
                        id: '4',
                        name: 'Ductorms',
                        slug: 'ductorms',
                        imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                        categories: [],
                        parent: null
                    },
                    {
                        id: '5',
                        name: 'Go Go Goxes',
                        slug: 'go-go-goxes',
                        imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                        categories: [
                            {
                                id: '6',
                                name: 'Corroticks',
                                slug: 'corroticks',
                                categories: []
                            }
                        ],
                        parent: { id: '2' }
                    },
                    {
                        id: '6',
                        name: 'Corroticks',
                        slug: 'corroticks',
                        imageSrc: 'https://source.unsplash.com/CQwNdMxwjfk',
                        categories: [],
                        parent: { id: '5' }
                    },
                ]
            }),
        )
    }),
]