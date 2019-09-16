var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getIngredients = async (req, res) => {
  try {
    var data = await knex.raw("select *, (select COUNT(*) from ingredients_used iu where iu.ingredients_id=i.id) count from ingredients i");
    if (data.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(data[0]))
      })
    } else {
      return res.json({
        response: message.error.INGREDIENTS_NOT_FOUND
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.addIngredients = async (req, res) => {
  try {
    let ingredientsInserData = await knex('ingredients').insert({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description
    });
    if (ingredientsInserData > 0) {
      return res.json({
        response: req.body,
        message: message.success.INGREDIENTS_INSERT
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

module.exports.deleteIngredients = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    console.log("id",ids);
    var idArray = req.params.ids.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log("----d",idArray);
    let ingredientsInserData = await knex('ingredients').whereIn('id', idArray).delete()
    if (ingredientsInserData > 0) {
      return res.json({
        message: message.success.INGREDIENTS_DELETED
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

module.exports.updateIngredientsStatus = async (req, res) => {
  try {
    let ids = req.params.ids.split(',');
    var idArray = req.params.ids.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log("----d",idArray);
    let ingredientsInserData = await knex('ingredients').whereIn('id', idArray).update(
      {
        isActive:req.body.isActive
      }
    )
    if (ingredientsInserData > 0) {
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

module.exports.updateIngredients = async (req, res) => {
  try {
    let ingredientsInserData = await knex('ingredients').where({
      id: req.body.id
    }).update({
      name: req.body.name,
      slug: req.body.slug,
      description: req.body.description,
      isActive: req.body.isActive,
    });
    if (ingredientsInserData > 0) {
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