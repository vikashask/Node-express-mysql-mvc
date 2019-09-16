var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getMenu = async (req, res) => {
  try {
    var menuData = await knex('menu');
    console.log("----",menuData);
    if (menuData.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(menuData))
      })
    } else {
      return res.json({
        response: message.error.MENU_NOT_FOUND
      })
    }
  } catch (error) {
    console.log(error)
  }
}
