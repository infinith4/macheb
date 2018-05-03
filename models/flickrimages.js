'use strict';
module.exports = (sequelize, DataTypes) => {
  var FlickrImages = sequelize.define('FlickrImages', {
    image_url: DataTypes.STRING,
    download_at: DataTypes.DATE
  }, { timestamps: false
    });
  FlickrImages.associate = function(models) {
    // associations can be defined here
  };
  return FlickrImages;
};