const mongoose = require('mongoose');

const MouseSchema = new mongoose.Schema({
    creator: {
        type: String,
        require: true
    },
    mouseStyle: {
        type: String,
        required: true
      },
    mouseSeries: {
        type: String,
        required: true
      },
    dpiModeNum: {
        type: Number,
        required: true,
        default: 1
      }
    }, {
      timestamps: true
    });

    module.exports = mongoose.model('Mouse', MouseSchema);