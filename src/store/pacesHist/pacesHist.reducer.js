const initialState = {
    paces: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'save':
            return {
                paces: [payload,...state.paces]
            }
        case 'del':
            return {
                paces: state.paces.filter((item) => item.key !== payload?item:null)
            }
        default:
            return state
    }
}

