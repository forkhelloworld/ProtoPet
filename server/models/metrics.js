"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Metrics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Metrics.belongsTo(models.Project, {
        foreignKey: "projectId",
      });
    }
  }
  Metrics.init(
    {
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      energy: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mood: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      exp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Metrics",
      tableName: "metrics",
      underscored: true,
    },
  );
  return Metrics;
};
