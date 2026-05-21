const notFound = (req, res, next)=>{
    const error = new Error (`${req.originalURL} not found`)
    res.status(404)
    next(error)
}

const errorHandler = (err,req,res,next)=>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode //if you haven't set the status code it sets it here
    let message = err.message //catches the error you threw in controller, the errors thrown by the database , also the not found error

    if(err.name === 'castError' && err.kind === 'objectId'){    //mongodb error
        statusCode = 404
        message = 'resource not found'
    }

    res.status(statusCode).json({
        message, 
        stack : process.env.NODE_ENV === 'production'  ? null : err.stack
    })
}

export  {errorHandler ,notFound}