import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = new Schema ({
    username: String,
    password: String,
    created: {
        type: Date,
        default: new Date()
    }
});

const UserModel = model('User', UserSchema);

export default UserModel;
