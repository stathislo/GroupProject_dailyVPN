const User = require('../modules/User');
const bcrypt = require('bcrypt');

module.exports = {
  loginUser: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).send('Can not find user.');
    }
    try {
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.session.user = true;
        req.session.email = req.body.email;
        req.session._id = user._id;
        res.status(200).send('Success!');
      } else {
        res.status(404).send('Not Allowed!');
      }
    } catch (err) {
      res.status(500).send('Error');
    }
  },
};
