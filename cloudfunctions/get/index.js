// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
exports.main = async (event, context) => await db.collection('toothGroup')
  .orderBy('real_id','asc')
  .get()