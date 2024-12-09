const Users = require("./../model/Userschema");

exports.register = async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body);

  try {
    const preuser = await Users.fineOne({ email: email });

    if (preuser) {
      res.status(400).json({ message: "the user is already exits" });
    } else {
      const newuser = await Users({
        name: name,
        email: email,
        phone: phone,
        message: message,
      });
      const saveuser = await newuser.save();
      res.status(200).json({ status: 200, saveuser });
    }
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.getdata = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.getdatabyid = async (req, res) => {
  const { id } = req.params;
  try {
    const singleuser = await Users.fineOne({ _id: id });
    res.status(200).json(singleuser);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

exports.deleteuser = async (req, res) => {
  const { id } = req.params;
  try {
    await Users.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "deleteuser successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateuser = async (req, res) => {
  const { id } = req.params;

  const { name, username, email, mobile, message } = req.body;

  try {
    const updateuser = await Users.findByIdAndUpdate(
      { _id: id },
      {
        name,
        username,
        email,
        mobile,
        message,
      },
      { new: true }
    );
    await updateuser.save();
    res.status(200).json(updateuser);
  } catch (error) {
    res.status(400).json(error);
  }
};
