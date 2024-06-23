import mongoose,{Schema} from 'mongoose';

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const Admin =mongoose.models.admin || mongoose.model('admin', adminSchema);
export default Admin;