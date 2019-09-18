var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getMetaTag = async (req, res) => {
  try {
    var metaTagData = await knex('meta_tag');
    // console.log("----",metaTagData);
    if (metaTagData.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(metaTagData[0]))
      })
    } else {
      return res.json({
        response: message.error.META_TAG_NOT_FOUND
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.addMetaTag = async (req, res) => {
  try {
    let tagInsertData = await knex('meta_tag').insert({
      name: req.body.name
    });
    if (tagInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.META_TAG_INSERT
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

module.exports.deleteMetaTag = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    console.log("id",ids);
    var idArray = req.params.ids.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log("----d",idArray);
    let tagInsertData = await knex('meta_tag').whereIn('id', idArray).delete()
    if (tagInsertData > 0) {
      return res.json({
        message: message.success.META_TAG_DELETED
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
