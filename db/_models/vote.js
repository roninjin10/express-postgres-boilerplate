module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Votes', {
    post_id: DataTypes.INTEGER,
    vote_type_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  })
  Vote.associate = (models) => {
    
  }
  return Vote
}
