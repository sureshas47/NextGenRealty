// roleMigration.js
const mongoose = require('mongoose');
const Role = require('./models/Role');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const createRoles = async () => {
    const roles = [{
            RoleName: 'User'
        },
        {
            RoleName: 'Agent'
        }
    ];

    await Role.insertMany(roles);
    console.log('Roles created');
};

const runMigration = async () => {
    await connectDB();
    await createRoles();
    mongoose.disconnect();
    console.log('Role migration completed');
};

runMigration().catch(err => console.error(err));