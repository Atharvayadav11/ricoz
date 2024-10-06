const User = require('../models/userModel');

// GET route to get all users
exports.getAllUsersInfo = async (req, res) => {
  try {
    //Find without any constraint gives us all the users data
    const users = await User.find();
    //all users data recived sent as response with sucess code 200
    res.status(200).json(users);
  } catch (error) {
    //error handling
    res.status(500).json({ error: 'Server error' });
  }
};

// POST route to create a new user
exports.createNewUser = async (req, res) => {
  try {
    //destructuring the req body
    const { name, email, age } = req.body;
    // creating a new object based on the User model
    const newUser = await User.create({ name, email, age });
    //201 signifis successful req and a new resource was created as a result
    res.status(201).json(newUser);
  } catch (error) {
    // error handling
    res.status(400).json({ error: 'User creation failed' });
  }
};

// PUT route to update update a user's info
exports.updateUsersInfo = async (req, res) => {
  try {
    //destructing the req params and body
    const { id } = req.params;
    const { name, email, age } = req.body;
    //findByIdAndUpdate basically finds the object based on the unique id and updates the info
    const updatedUser = await User.findByIdAndUpdate(id, { name, email, age }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
};
