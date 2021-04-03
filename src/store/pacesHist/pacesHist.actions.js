export const save = (pace) => ({
    type: 'save',
    payload: pace
})

export const del = (key) => ({
    type: 'del',
    payload: key
})
