const jwt = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server-express')
const secret = 'mysecretsshhhhh'
const expiration = '2h'

module.exports = {
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim()
    }
    if (!token) {
      return req
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration })
      req.user = data
    } catch(err) {
      console.log('Invalid token')
    }
    return req
  },
 
  //Classcode - used here
  signToken: function({ _id, email, username, classCode }) {
    const payload = { _id, email, username, classCode }
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  },
  checkAuth: function(context) {
    if (process.env.NODE_ENV === 'production' && !context.user) {
      throw new AuthenticationError('You must be logged in to query this schema.')
    }
  }
}
