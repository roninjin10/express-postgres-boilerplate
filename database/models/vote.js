module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    post_id: DataTypes.INTEGER,
    vote_type_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  })
  Vote.associate = (models) => {
    // associations can be defined here
  }
  return Vote
}
