'use strict';
module.exports = (sequelize, DataTypes) => {
  const NearbyPlace = sequelize.define('NearbyPlace', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  NearbyPlace.associate = function(models) {
    // associations can be defined here
  };
  return NearbyPlace;
};