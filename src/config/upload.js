const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const oname = file.originalname
            const ext = path.extname(oname);
            const name = path.basename(oname, ext)
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
};