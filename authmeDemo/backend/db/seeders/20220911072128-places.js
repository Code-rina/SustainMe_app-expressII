'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert(
      "NearbyPlaces",
      [
        {
          name: "Public Library",
          address: "1432 cityline dr",
          type: "Library",
        },
        {
          name: "Public Pool",
          address: "1325 E Arapaho rd",
          type: "Pool",
        },
        {
          name: "The Colossium",
          address: "1100 Maxim dr",
          type: "Gym",
        },
        {
          name: "Huffines Park",
          address: "1256 Plano rd",
          type: "Park",
        },
        {
          name: "Dunder Mifflin",
          address: "1725 Slough ave",
          type: "Office",
        },
        {
          name: "P. Sherman",
          address: "42 Wallaby way",
          type: "Dentist",
        },
        {
          name: "White Rock Lake",
          address: "1329 E Lawther rd",
          type: "Lake",
        },
        {
          name: "Berkner Park",
          address: "1415 Stonecrest dr",
          type: "Park",
        },
      ],
      {}
    );

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
