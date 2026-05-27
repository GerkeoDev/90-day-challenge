const {User} = require('../models/User.model')

const changeTheme = (req, res) => {
    console.log(req.body)
    console.log(req.user.id)
    User.findOneAndUpdate({ _id: req.user.id }, { settings: { theme: req.body.theme } }, { returnDocument: 'after', runValidators: true })
        .then(result => res.json({ message: 'Theme changed' }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports = { changeTheme }