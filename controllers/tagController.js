var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getTag = async (req, res) => {
  try {
    var tagData = await knex('tags').where({
      isActive: 1
    })
    if (tagData.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(brandData))[0]
      })
    } else {
      return res.json({
        response: message.error.TAG_NOT_FOUND
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.addTag = async (req, res) => {
  try {
    let tagInsertData = await knex('tags').insert({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description
    });
    if (tagInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.TAG_INSERT
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

module.exports.deleteTag = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    console.log("id",req.params);
    
    // console.log("id",req);
    process.exit()
    let tagInsertData = await knex('tags').where({
      id: req.body.id
    }).del();
    console.log(tagInsertData);
    
    if (tagInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.TAG_UPDATE
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

module.exports.updateTag = async (req, res) => {
  try {
    let tagInsertData = await knex('tags').where({
      id: req.body.id
    }).update({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description,
      isActive: req.body.isActive,
    });
    if (tagInsertData > 0) {
      return res.json({
        response: req.body,
        message: message.success.TAG_UPDATE
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