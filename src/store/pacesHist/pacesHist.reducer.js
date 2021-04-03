const initialState = {
    paces: []
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

