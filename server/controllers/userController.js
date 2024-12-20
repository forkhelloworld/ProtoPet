const { User } = require("../models");
const NotFoundError = require("../errors/NotFoundError");

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
    const users = await User.findAll();
    res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
};

module.exports.getOne = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPk(+userId);
    if (!user) {
      console.log(NotFoundError);
      throw new NotFoundError("User");
    }
    res.status(200).send({ user });
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
