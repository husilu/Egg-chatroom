module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const ctrSchema = new Schema({
    chatroomName: {type: String, required: true}, // 聊天室名称
    peopleArray: {type: Number, required: true}, // 聊天室人的数组
    avatar: {type: String, default: null}, // 聊天室头像
    chatArray: {type: String, default: null}, // 聊天内容气泡数组
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  })

  return mongoose.model('chatroom', ctrSchema)
} 