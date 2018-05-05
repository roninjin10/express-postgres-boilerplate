module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    post_id: DataTypes.INTEGER,
    text: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  })
  Comment.associate = (models) => {
    // associations can be defined here
    // Comment.belongsTo(models.Post)
  }
  return Comment
}
