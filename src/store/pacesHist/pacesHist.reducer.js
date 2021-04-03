const initialState = {
    paces: [{
        key: '6.43',
        pace: 6.43,
        date: '03/04/2021',
    }]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'save':
            return {
                paces: [...state.paces, payload]
            }
        case 'del':
            return {
                paces: state.paces.filter((item) => item.key !== payload?item:null)
            }
        default:
            return state
    }
}

