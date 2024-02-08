const Message = require("../models/messageModel");
const catchSync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

exports.createMessage = factory.createOne(Message);
exports.getMessage = factory.getOne(Message);
exports.getAllMessages = factory.getAll(Message);
exports.updateMessage = factory.updateOne(Message);
exports.deleteMessage = factory.deleteOne(Message);
