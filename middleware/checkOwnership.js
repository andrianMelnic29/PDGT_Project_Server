const Location = require('../models/location')
exports.verifyIDs = async (req, res, next) => {
  try {
    // const currentUserId = await User.findById(req.payload.id)
    const location = await Location.findById(req.query.id)
    if (location.addedBy._id.equals(req.payload.id)) {
      return next()
    } else {
      res.send("You're not the owner of this object")
    }
  } catch (error) {
    console.log(error)
  }
}
