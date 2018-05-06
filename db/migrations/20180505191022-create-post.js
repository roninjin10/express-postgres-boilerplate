module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Posts',
          key: 'id'
        }
      },
      postTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PostTypes',
          key: 'id'
        }
      },
      viewCount: {
        type: Sequelize.INTEGER
      },
      answerCount: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      commentCunt: {
        type: Sequelize.INTEGER
      },
      favoriteCount: {
        type: Sequelize.INTEGER
      },
      closedDate: {
        type: Sequelize.STRING
      },
      ownerUserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      tag: {
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
