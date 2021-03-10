const User = require('../modules/User');
const bcrypt = require('bcrypt');

module.exports = {
  registerUser: async (req, res) => {
    try {
      if (
        req.body.firstName !== null &&
        req.body.lastName !== null &&
        req.body.email !== null &&
        req.body.password !== null
      ) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hashedPassword,
        });

        const saveUser = await user.save();
        res.status(200).send(saveUser);
      }
    } catch (err) {
      res.send({ message: 'You must fill in all the fields!' });
    }
  },
};
