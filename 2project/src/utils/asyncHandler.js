// another way to write asyncHandler
// Production level way

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)) // the next function is used to pass errors to the next middleware
    }
}

export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => {} we are taking function as input
// const asyncHandler = (func) => async () => {} here here we are doing nesting of arrow function


// one way to write asyncHandler. This is Higher-order Function
// const asyncHandler = (func) => async (req, res, next) => {  
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({ // 500 means(internal server error)
//             success: false,
//             message: error.message
//         })
//     }
// }