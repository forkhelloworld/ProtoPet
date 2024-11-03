"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("metrics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      projectId: {
        field: "project_id",
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      health: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        allowNull: false,
      },
      energy: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        allowNull: false,
      },
      mood: {
        type: Sequelize.INTEGER,
        defaultValue: 100,
        allowNull: false,
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
      },
      exp: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("metrics");
  },
};
