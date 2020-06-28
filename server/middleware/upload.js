const path = require('path')
const fs = require('fs')
const multer = require('multer')
const translit = require('cyrillic-to-translit-js')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dirName = translit({ preset: 'ru' })
      .transform(req.body.title, '_')
      .toLowerCase()
    const uploadPath = `./static/${dirName}`
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath)
    }
    cb(null, uploadPath)
  },
  filename(req, file, cb) {
    const uniqueSuffix = Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  },
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
})
