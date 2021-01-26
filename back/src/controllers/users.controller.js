const bcrypt = require('bcryptjs');
const usersCtrl = {};

// Models
const User = require('../models/User');

usersCtrl.singup = async (req, res) => {
    let errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password !== confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
      errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length > 0) {
        res.json({errors});
    } else {
        // Saving a New User
        const newUser = new User({ name, email, password });
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.json({message: 'user saved'});
    }
  };

usersCtrl.singin = async (req, res) => {

  const {email, password} = req.body;
  const matchEmail = await User.findOne({ "email" : email });
      
  if(matchEmail){
    bcrypt.compare(password, matchEmail.password, function(err, response) {
      if(response){
        res.json({userData: matchEmail})
      }else{
        res.json({message: "The passwords dont match"})
      }
    });   
  }else{
    res.json({message: "This user doesnt exist"})
  }
}



module.exports = usersCtrl;