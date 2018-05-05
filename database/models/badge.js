module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define('Badge', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  })
  Badge.associate = function(models) {
    // associations can be defined here
  }
  return Badge
}
