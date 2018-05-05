module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_type_id: {
        type: Sequelize.INTEGER
      },
      creation_date: {
        type: Sequelize.STRING
      },
      view_count: {
        type: Sequelize.INTEGER
      },
      answer_count: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      comment_count: {
        type: Sequelize.INTEGER
      },
      favorite_count: {
        type: Sequelize.INTEGER
      },
      closed_date: {
        type: Sequelize.STRING
      },
      owner_user_id: {
        type: Sequelize.INTEGER
      },
      tags: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};
