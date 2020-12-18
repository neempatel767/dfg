const Keyboard = require('../models/keyboard');
const Mouse = require('../models/mouse');
const User = require('../models/user');

exports.index = async (req, res, next) => {
    try {
      const keyboard = await Keyboard.find();
      res.status(200).json(keyboard);
    } catch (error) {
      next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
      const keyboard = await keyboard.findById(req.params.id);
      res.status(200).json(keyboard);
    } catch (error) {
      next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
      const { keyboardStyle,keyType, quantity } = req.body;
  
      const user = await User.findById(req.user._id);
  
      const key = await Keyboard.create({
        client: user.name,
        keyboardStyle: keyboardStyle,
        keyType: keyType,
        quantity: quantity
      });
  
      res.status(200).json({ message: "keyboard entry was created successfully", keyboard: key });
    } catch (error) {
      next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
      const { _id, keyboardStyle, keyType, quantity } = req.body;
      const key = await Keyboard.findOneAndUpdate({ _id: _id }, {
        keyboardStyle,
        keyType,
        quantity
      });
  
      res.status(200).json({ message: "Keyboard was updated successfully", keyboard: key });
    } catch (error) {
      next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await Keyboard.findOneAndDelete({ _id: _id });
  
      res.status(200).json({ message: "Keyboard entry was deleted successfully" });
    } catch (error) {
      next(error);
    }
  };