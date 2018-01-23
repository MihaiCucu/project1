'use strict';
const fs = require('fs');
const path = require('path');

function getAllFiles (currentDirPath, callback) {
    let filesObj = {
        video: [],
        image: [],
        audio: [],
        misc: []
    };

    parseFiles(filesObj, currentDirPath, callback);
};

function isImageFile (file) {
    let imageReg = '(http(s?):)|([/|.|\w|\s])*\.(?:jpg|JPG|gif|png|jpeg|JPEG)';
    return file.match(imageReg);
};

function isVideoFile (file) {
    let videoReg = '(http(s?):)|([/|.|\w|\s])*\.(?:avi|mpg|mkv|mp4)';
    return file.match(videoReg);
};

function isSoundFile (file) {
    let soundReg = '(http(s?):)|([/|.|\w|\s])*\.(?:mp3|wma)';
    return file.match(soundReg);
};

function parseFiles (filesObj, currentDirPath, cb) {
    let isLooping = false;
    let timer = false;
    let callback = cb;

    walk(currentDirPath);

    function walk (dirPath) {
        fs.readdir(dirPath, function (err, files) {
            if (err) {
                throw new Error(err);
            }
            if (!timer && isLooping) {
                timer = setTimeout(function() {
                    isLooping = false;
                    if (typeof callback == 'function') {
                        callback(filesObj);
                    }
                }, 500);
            } else if (isLooping) {
                clearTimeout(timer);
                timer = false;
            }

            files.forEach(function (name) {
                isLooping = true;

                let filePath = path.join(dirPath, name);
                let stat = fs.statSync(filePath);

                if (stat.isFile()) {
                    if (isVideoFile(filePath)) {
                        filesObj.video.push(filePath);
                    } else if (isSoundFile(filePath)) {
                        filesObj.audio.push(filePath);
                    } else if (isImageFile(filePath)) {
                        filesObj.image.push(filePath);
                    } else {
                        filesObj.misc.push(filePath);
                    }
                } else if (stat.isDirectory()) {
                    walk(filePath);
                }
            });
        });
    }

    return filesObj;
};

exports.getAllFiles = getAllFiles;