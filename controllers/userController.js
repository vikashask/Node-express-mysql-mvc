var knex = require("../config/knex");
var md5 = require("md5");
var message = require("../utils/message");

const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const fs = require("fs");
var filename = "videos/input.mp4";

function callback(directory) {
  console.log("callback -> directory", directory);
  // do something when encoding is done
  var dir = "./videos/upload";
  // var dir = __dirname + "/upload";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(
    `${dir}/index.m3u8`,
    "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360\n360p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=842x480\n480p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1280x720\n720p.m3u8",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
}

module.exports.streamVideo = async (req, res) => {
  var dir = "./videos/upload";

  ffmpeg(filename)
    .addOptions([
      //360
      "-profile:v main",
      "-vf scale=w=640:h=360:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-b:a 96k",
      "-c:v h264",
      "-crf 20",
      "-g 48",
      "-keyint_min 48",
      "-sc_threshold 0",
      "-b:v 800k",
      "-maxrate 856k",
      "-bufsize 1200k",
      "-hls_time 10",
      "-hls_segment_filename videos/upload/360p_%03d.ts",
      "-hls_playlist_type vod",
      "-f hls",
    ])
    .output(`${dir}/360p.m3u8`)
    .run();

  ffmpeg(filename)
    .addOptions([
      //480
      "-profile:v main",
      "-vf scale=w=842:h=480:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-b:a 128k",
      "-c:v h264",
      "-crf 20",
      "-g 48",
      "-keyint_min 48",
      "-sc_threshold 0",
      "-b:v 1400k",
      "-maxrate 1498k",
      "-bufsize 2100k",
      "-hls_time 10",
      "-hls_segment_filename videos/480p_%03d.ts",
      "-hls_playlist_type vod",
      "-f hls",
    ])
    .output(`${dir}/480p.m3u8`)
    .run();

  ffmpeg(filename)
    .addOptions([
      //720
      "-profile:v main",
      "-vf scale=w=1280:h=720:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-b:a 128k",
      "-c:v h264",
      "-crf 20",
      "-g 48",
      "-keyint_min 48",
      "-sc_threshold 0",
      "-b:v 2800k",
      "-maxrate 2996k",
      "-bufsize 4200k",
      "-hls_time 10",
      "-hls_segment_filename videos/720p_%03d.ts",
      "-hls_playlist_type vod",
      "-f hls",
    ])
    .output(`${dir}/720p.m3u8`)
    .on("end", function () {
      console.log("module.exports.streamVideo -> dir", dir);
      var dir23 = "./videos/upload";
      // var dir = __dirname + "/upload";

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      fs.writeFile(
        `${dir23}/index.m3u8`,
        "#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360\n360p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=842x480\n480p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1280x720\n720p.m3u8",
        function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        }
      );
    })
    .run();
};

module.exports.getUsers = async (req, res) => {
  try {
    var data = await knex.select().table("user");
    console.log("---", JSON.parse(JSON.stringify(data))[0]);
    return res.json({
      response: JSON.parse(JSON.stringify(data))[0],
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports.login = async (req, res) => {
  try {
    var data = await knex("user")
      .where({
        email_id: req.body.email_id,
        password: md5(req.body.password),
        isActive: 1,
      })
      .select("id", "email_id");
    console.log("data", data.length);
    if (data.length > 0) {
      return res.json({
        response: JSON.parse(JSON.stringify(data))[0],
        message: message.success.LOGIN,
      });
    } else {
      return res.json({
        response: message.error.INVALID_LOGIN,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports.register = async (req, res) => {
  try {
    let isUserExist = await checkUserExist(req.body.email_id);
    if (isUserExist) {
      return res.json({
        message: message.error.USER_ALLREADY_EXIST,
      });
    } else {
      var data = await knex("user").insert({
        email_id: req.body.email_id,
        password: md5(req.body.password),
        isActive: 1,
      });
      if (data.length > 0) {
        return res.json({
          message: message.success.REGISTER,
        });
      } else {
        return res.json({
          response: message.error.UNABLE_REGISTER,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports.forgotPassword = async (req, res) => {
  try {
    var userDetails = await knex("user").where({
      email_id: req.body.email_id,
      isActive: 1,
    });
    if (userDetails.length > 0) {
      console.log("data", JSON.parse(JSON.stringify(userDetails)));
      return res.json({
        response: message.success.FORGOT_PASSWORD_SENT,
      });
    } else {
      return res.json({
        response: message.error.USER_NOT_EXIST,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

var checkUserExist = async (email_id) => {
  try {
    var data = await knex("user").where({ email_id: email_id, isActive: 1 });
    console.log("data", data.length);
    if (data.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
};
