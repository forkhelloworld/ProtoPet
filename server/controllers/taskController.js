const { User } = require("../models");

module.exports.createOne = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.getAll = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.getOne = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.updateOne = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOne = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
