module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
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
    Post.belongsTo(models.Posts)
    Post.hasMany(models.Posts)
    Post.hasOne(models.PostTypes)
    Post.belongsTo(models.Users)
  }
  return Post
}
