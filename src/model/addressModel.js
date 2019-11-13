const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    streetNumber: { 
        type : Number
    },
    streetName: { 
        type: String
    },
    city: { 
        type: String
    },
    province: { 
        type: String 
    },
    postal: { 
        type: String
    }/*,
    userId: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    service: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'service'
    }]*/
})

// const Address = mongoose.model('address', AddressSchema);

module.exports = AddressSchema;