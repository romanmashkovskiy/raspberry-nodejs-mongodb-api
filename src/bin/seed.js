#!/usr/bin/env node

import 'babel-polyfill';
import mongoose from '../core/mongoose';
import { User, Product, Review } from '../models';

const seedUsers = [
    {
        _id: '5d616bf8d5ddb142e8c55bcc',
        userName: 'User1',
        email: 'user1@email.com',
        password: 'asdfasdf',
        isConfirmed: true
    },
    {
        _id: '5d616bf8d5ddb142e8c55bcd',
        userName: 'User2',
        email: 'user2@email.com',
        password: 'asdfasdf',
        isConfirmed: true
    },
];

mongoose.connection.once('open', async () => {
    /* Users */
    await User.deleteMany();
    console.log('Users collection removed');
    const users = await Promise.all(seedUsers.map(user => User.create({
        ...user
    })));
    console.log(`${ users.length } users success added`);

    /* Exit */
    process.exit(0);
});