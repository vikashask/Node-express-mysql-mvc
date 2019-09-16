var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getMenu = async (req, res) => {
  try {
    let menuData;
    if (req.params.id) {
      menuData = await knex('menu').where({id:req.params.id});
    }else{
      menuData = await knex('menu');
    }
    console.log("----", menuData);
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
    console.log(error);
    return res.json({
      response: error
    });
  }
}

module.exports.addMenu = async (req, res) => {
  try {
    let tagInsertData = await knex('menu').insert({
      name: req.body.name,
      type: req.body.type,
      isVisibility: req.body.isVisibility,
      icon_img: req.body.icon_img
    });
    if (tagInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.MENU_INSERT
      })
    } else {
      return res.json({
        response: message.error.SOMETHING_WRONG
      })
    }
  } catch (error) {
    console.log(error);
    return res.json({
      response: error
    });
  }
}

module.exports.deleteMenu = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    var idArray = req.params.ids.split(',').map(function (item) {
      return parseInt(item, 10);
    });
    console.log("----d", idArray);
    let tagInsertData = await knex('menu').whereIn('id', idArray).delete()
    if (tagInsertData > 0) {
      return res.json({
        message: message.success.MENU_DELETED
      })
    } else {
      return res.json({
        response: message.error.SOMETHING_WRONG
      })
    }
  } catch (error) {
    console.log(error);
    return res.json({
      response: error
    })
  }
}

module.exports.updateMenu = async (req, res) => {
  try {
    let menuInsertData = await knex('menu').where({
      id: req.body.id
    }).update({
      name: req.body.name,
      type: req.body.type,
      isVisibility: req.body.isVisibility,
      icon_img: req.body.icon_img
    });
    if (menuInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.MENU_UPDATE
      })
    } else {
      return res.json({
        response: message.error.SOMETHING_WRONG
      })
    }
  } catch (error) {
    console.log(error);
    return res.json({
      response: error
    })
  }
}