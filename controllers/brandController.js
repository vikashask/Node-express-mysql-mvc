var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getBrand = async (req, res) => {
  try {
    let brandData;
    if (req.params.id) {
      brandData = await knex('brand').where({
        id: req.params.id,
        isActive: 1
      });
    } else {
      brandData = await knex('brand')
        .where({
          isActive: 1
        });
    }
    if (brandData.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(brandData))
      })
    } else {
      return res.json({
        response: message.error.BRAND_NOT_FOUND
      })
    }
  } catch (error) {
    console.log(error)
  }
}