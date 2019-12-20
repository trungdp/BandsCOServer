'use strict';
module.exports = (sequelize, DataTypes) => {
  const MusicalInstrument = sequelize.define('MusicalInstrument', {
    name: DataTypes.TEXT
  }, {});
  MusicalInstrument.associate = function(models) {
    // associations can be defined here
  };
  return MusicalInstrument;
};