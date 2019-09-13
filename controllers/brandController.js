var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getBrand = async (req,res) => {
    try {
        var brandData = await knex('brand').where({
            isActive: 1
          })
        if(brandData){
            return res.json({
              response: JSON.parse(JSON.stringify(brandData))[0]
            })        
        }else{
            return res.json({
              response: message.error.BRAND_NOT_FOUND
            })        
        }
    } catch (error) {
        console.log(error)        
    }
}