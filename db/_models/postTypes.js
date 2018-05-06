module.exports = (sequelize, DataTypes) => {
  const PostTypes = sequelize.define('PostTypes', {
    name: DataTypes.STRING,
  })
  PostTypes.associate = (models) => {
    PostTypes.belongsToMany(models.Posts)
  }
  return PostTypes
}
