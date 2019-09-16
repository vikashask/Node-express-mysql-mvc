var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getCategory = async (req, res) => {
  try {
    let categoryData;
    if (req.params.id) {
      categoryData = await knex('category').where({id:req.params.id});
    }else{
      categoryData = await knex('category');
    }
    console.log("----", categoryData);
    if (categoryData.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(categoryData))
      })
    } else {
      return res.json({
        response: message.error.CATEGORY_NOT_FOUND
      })
    }
  } catch (error) {
    console.log(error);
    return res.json({
      response: error
    });
  }
}

module.exports.addCategory = async (req, res) => {
  try {
    let tagInsertData = await knex('category').insert({
      name: req.body.name,
      type: req.body.type,
      isVisibility: req.body.isVisibility,
      icon_img: req.body.icon_img
    });
    if (tagInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.CATEGORY_INSERT
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

module.exports.deleteCategory = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    var idArray = req.params.ids.split(',').map(function (item) {
      return parseInt(item, 10);
    });
    console.log("----d", idArray);
    let tagInsertData = await knex('category').whereIn('id', idArray).delete()
    if (tagInsertData > 0) {
      return res.json({
        message: message.success.CATEGORY_DELETED
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

module.exports.updateCategory = async (req, res) => {
  try {
    let categoryInsertData = await knex('category').where({
      id: req.body.id
    }).update({
      name: req.body.name,
      type: req.body.type,
      isVisibility: req.body.isVisibility,
      icon_img: req.body.icon_img
    });
    if (categoryInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.CATEGORY_UPDATED
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