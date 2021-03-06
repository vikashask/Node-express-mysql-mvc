var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getTag = async (req, res) => {
  try {
    let sql = `select t.*, (select COUNT(*) from tags_used tu where tu.tags_id=t.id) count from tags t 
              LEFT JOIN tags_brand as tb ON(t.id = tb.tags_id) WHERE tb.brand_id=${req.params.brand_id}`;
    var tagData = await knex.raw(sql);
    if (tagData.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(tagData[0]))
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
    console.log('tagInsertData',tagInsertData[0]);
      let tagBrandInsertData = await knex('tags_brand').insert({
        tags_id: tagInsertData[0],
        brand_id: req.body.brand_id
      });
    if (tagBrandInsertData > 0) {
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
    console.log("id",ids);
    var idArray = req.params.ids.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log("----d",idArray);
    let tagInsertData = await knex('tags').whereIn('id', idArray).delete();    
    if (tagInsertData > 0) {
      return res.json({
        message: message.success.TAG_DELETED
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

module.exports.updateTagStatus = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    var idArray = req.params.ids.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log("----d",idArray);
    let tagInsertData = await knex('tags').whereIn('id', idArray).update(
      {
        isActive:req.body.isActive
      }
    )
    if (tagInsertData > 0) {
      return res.json({
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