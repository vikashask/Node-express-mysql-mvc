var knex = require('../config/knex');
var md5 = require('md5');
var message = require('../utils/message')

module.exports.getProfile = async (req, res) => {
  try {
    var data = await knex.where({
      email_id: req.body.email_id,
      isActive: 1
    }).select('email_id', 'profile_pic', 'first_name', 'last_name', 'phone_number').table('user');
    console.log("---", JSON.parse(JSON.stringify(data))[0]);
    return res.json({
      response: JSON.parse(JSON.stringify(data))[0]
    })
  } catch (e) {
    console.log(e)
  }
}

module.exports.updateProfile = async (req, res) => {
  try {
    let userData = await checkUserExist(req.body.email_id);
    if (userData) {
      if (md5(req.body.password) === userData[0].password) {
        let userProfile = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          phone_number: req.body.phone_number,
          profile_pic: req.body.profile_pic,
        }
        var data = await knex('user').where({
          email_id: req.body.email_id
        }).update(userProfile);
        console.log("data---", data);
        if (data > 0) {
          return res.json({
            message: message.success.PROFILE_UPDATED
          });
        } else {
          return res.json({
            response: message.error.SOMETHING_WRONG
          });
        }
      } else {
        return res.json({
          message: message.error.PASSWORD_NOT_MATCHED
        });
      }
    } else {
      return res.json({
        message: message.error.USER_NOT_EXIST
      });
    }
  } catch (e) {
    console.log(e)
  }
}

module.exports.logout = async (req, res) => {
  try {
    var userDetails = await knex('user').where({
      email_id: req.body.email_id,
      isActive: 1
    })
    if (userDetails.length > 0) {
      console.log("data", JSON.parse(JSON.stringify(userDetails)));
      return res.json({
        response: message.success.FORGOT_PASSWORD_SENT
      });
    } else {
      return res.json({
        response: message.error.USER_NOT_EXIST
      });
    }
  } catch (e) {
    console.log(e)
  }
}

var checkUserExist = async (email_id) => {
  try {
    var data = await knex('user').where({
      email_id: email_id,
      isActive: 1
    })
    if (data.length > 0) {
      return JSON.parse(JSON.stringify(data));
    } else {
      return false;
    }
  } catch (e) {
    console.log(e)
  }
}