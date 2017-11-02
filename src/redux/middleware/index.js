const Middleware = (
  store => next => action => {
    // Add custom middleware functions here.
    next(action)
  }
)

export default Middleware
