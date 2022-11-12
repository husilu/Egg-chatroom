module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    username: {type: String, required: true},
    nickname: {type: String, required: false},
    password: {type: String, required: true, select: false},
    email: {type: String, required: false},
    avatar: {type: String, default: null},
    intro: {type: String, default: null},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  })

  return mongoose.model('User', UserSchema)
}