export const onReadSuccess = (data) => {
    return {
        type: 'success',
        payload: data,
    }
}

export const timeout = (data = "") => {
    return {
        type: 'timeout',
        payload: data
    }
}


// export const QrDataSave = (data = "") => {
//     return {
//         type: "qrDataSave",
//         payload: data
//     }
// }