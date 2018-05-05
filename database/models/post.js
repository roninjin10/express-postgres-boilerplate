module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    post_type_id: DataTypes.INTEGER,
    view_count: DataTypes.INTEGER,
    answer_count: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    comment_count: DataTypes.INTEGER,
    favorite_count: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    tags: DataTypes.STRING
  })
  Post.associate = (models) => {
    // associations can be defined here
    //Post.belongsToMany(models.Comment)
  }
  return Post
}
