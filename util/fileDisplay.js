var fs = require('fs');
var path = require('path'); //解析需要遍历的文件夹
//调用文件遍历方法
//文件遍历方法
async function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    return new Promise(async (resolve, reject) => {
        let templateList = {};

        const files = await fs.readdirSync(filePath);
        await files.map(async file => {
            var filedir = path.join(filePath, file);
            let a = await fs.readdirSync(filedir);
            templateList[file] = a;
        });

        resolve([files, templateList]);
    });
}
module.exports = {
    fileDisplay
};
