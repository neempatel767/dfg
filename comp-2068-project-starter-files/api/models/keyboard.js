const mongoose = require('mongoose');

const KeyboardSchema = new mongoose.Schema({
    client: {
        type:String,
        require: true
    },
    keyboardStyle: {
        type: String,
        required: true
      },
      keyType: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }, {
      timestamps: true
    });

    module.exports = mongoose.model('Keyboard', KeyboardSchema);