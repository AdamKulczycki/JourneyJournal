const Journey       = require('./../models/journey');
const User          = require('./../models/user'); 
const Image         = require('./../models/image');
const node_dropbox  = require('node-dropbox');
const DropboxClient = require('dropbox');
var fs   = require('fs');
const config        = require('./../config/auth');

 
//datauri.pipe(process.stdout);

module.exports = {
    getImages: (req, res) => {
        Image.find({id_journey: req.params.id}, (err, images) => {
            api = node_dropbox.api(req.user._doc.dropbox.access_token);
            let tmp = 'temp';
            // var dropbox = new DropboxClient(config.dropboxAuth.key, config.dropboxAuth.secret);
            // dropbox.getAccessToken('kanonieer@o2.pl', '513344493Ee', (err, accessToken, accessTokenSecret) => {
            //     console.log(accessToken);
            //     console.log(accessTokenSecret);
            //     console.log('cokolwiek');
            // });

            api.getFile('/Holandia-2017-05/4.jpeg', (err, response, body) => {

                // fs.writeFile("tmp\\test.jpg", body, function(err) {
                //     if(err) {
                //         return console.log(err);
                //     }


                //     console.log("The file was saved!");
                // }); 
                var buffer =  new Buffer(body.toString(),'binary');
                tmp = buffer.toString('base64');
                fs.writeFile('mynewfile3.txt',tmp , function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
                //console.log(response);

                //datauri.format('.png', buffer);
 
                // console.log(datauri.content); //=> "data:image/png;base64,eGtjZA==" 
                // console.log(datauri.mimetype); //=> "image/png" 
                // console.log(datauri.base64); //=> "eGtjZA==" 
                // // datauri.encode(buffer);
                // datauri.on('encoded', content => console.log(content));

                //console.log(Base64.encode(body));
                //console.log(tmp);
                res.status(200).json({image: tmp});
                // base64.encode(body, function(err, base64String) {
                //     console.log(base64String);
                // });
                // data = fs.readFileSync(body);

                // console.log(data.toString('base64'));
                //console.log(res);
                //var file = fs.createWriteStream("1.jpg");
                // // writes an empty file to disk
                // res.pipe(file);
                // .pipe(fs.createWriteStream('1.jpg');
            });
        });
    }
}