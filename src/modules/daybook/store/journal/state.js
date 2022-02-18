
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Exercitation sunt aliquip amet ut et veniam cillum pariatur ullamco occaecat.',
            picture: null

        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Id id magna sit excepteur consequat voluptate exercitation nulla minim sint ipsum cupidatat velit nulla.',
            picture: null

        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Enim cupidatat do sit anim do mollit quis.',
            picture: null

        }
    ]
})