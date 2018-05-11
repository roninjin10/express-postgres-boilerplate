export default (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    postref: {
      type: DataTypes.INTEGER,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [3, 150],
          msg: 'Please enter a title between 3 and 150 characters'
        }
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 2000],
          msg: 'Please enter a post between 1 and 2000 characters'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'comment'
    }
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User);
    Post.belongsTo(models.Post);
    Post.hasMany(models.Post);
  };

  return Post;

}