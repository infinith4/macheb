'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FlickrImages', [{
        image_url:'https://flickr.com',
        download_at:'2018-01-02 18:00:00'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FlickrImages', null, {});
  }
};
