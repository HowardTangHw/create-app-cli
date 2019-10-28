var fs = require('fs');
var path = require('path'); //解析需要遍历的文件夹 
//调用文件遍历方法
//文件遍历方法
async function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    return new Promise((resolve, reject) => {
        let templateList = {};
        fs.readdir(filePath, async function(err, files) {
            if (err) {
                console.warn(err);
            } else {
                //遍历读取到的文件列表
                for (let i = 0; i < files.length; i++) {
                    var filedir = path.join(filePath, files[i]);
                    let a = await fs.readdirSync(filedir);
                    templateList[files[i]] = a;
                }

                resolve([files, templateList]);
            }
        });
    });
}
module.exports = {
    fileDisplay
};
