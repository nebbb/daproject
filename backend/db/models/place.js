"use strict";
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    "Place",
    {
      userId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING(100),
      description: DataTypes.TEXT,
      city: DataTypes.STRING(100),
      state: DataTypes.STRING(100),
      info: DataTypes.STRING(100),
      price: DataTypes.STRING(100),
      lat: DataTypes.TEXT,
      long: DataTypes.TEXT,
    },
    {}
  );
  Place.associate = function (models) {
    const columnMapping = {
      foreignKey: "placeId",
      through: "Booking",
      otherKey: "userId",
    };
    const columnMapping2 = {
      foreignKey: "placeId",
      through: "Review",
      otherKey: "userId",
    };
    const columnMapping3 = {
      foreignKey: "placeId",
      through: "Favourite",
      otherKey: "userId",
    };
    Place.belongsToMany(models.User, columnMapping3);
    Place.belongsToMany(models.User, columnMapping2);
    Place.belongsToMany(models.User, columnMapping);
    Place.belongsTo(models.User, { foreignKey: "userId" });
    Place.hasMany(models.Image, { foreignKey: "placeId" });
  };
  return Place;
};
