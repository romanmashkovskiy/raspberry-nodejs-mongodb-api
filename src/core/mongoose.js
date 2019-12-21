import mongoose from 'mongoose';
import env from '../config/env';

mongoose.connect(env.DB_CONNECT_URI, {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    useCreateIndex: true,
    useNewUrlParser: true
});


export default mongoose;