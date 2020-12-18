const Mouse = require('../models/mouse');

const Keyboard = require('../models/keyboard');

const User = require('../models/user');

exports.index = async (req, res, next) => {
    try {
      const mouse = await mouse.find();
      res.status(200).json(mouse);
    } catch (error) {
      next(error);
    }
};

exports.show = async (req, res, next) => {
    try {
      const mouse = await mouse.findById(req.params.id);
      res.status(200).json(mouse);
    } catch (error) {
      next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
      const { mouseStyle, mouseSeries, dpiModeNum } = req.body;
  
      const user = await User.findById(req.user._id);
  
      const mouse = await Mouse.create({
        creator: user.name,
        mouseStyle: mouseStyle,
        mouseSeries: mouseSeries,
        dpiModeNum: dpiModeNum
      });
  
      res.status(200).json({ message: "Mouse entry was created successfully", mouse: mouse });
    } catch (error) {
      next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
      const { _id, mouseStyle, mouseSeries, dpiModeNum } = req.body;
      const mouse = await Keyboard.findOneAndUpdate({ _id: _id }, {
        mouseStyle,
        mouseSeries,
        dpiModeNum  
      });
  
      res.status(200).json({ message: "Mouse was updated successfully", mouse: mouse });
    } catch (error) {
      next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await Mouse.findOneAndDelete({ _id: _id });
  
      res.status(200).json({ message: "Mouse entry was deleted successfully" });
    } catch (error) {
      next(error);
    }
  };