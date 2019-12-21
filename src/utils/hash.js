import bcrypt from 'bcrypt';

export const generateHash = (str) => bcrypt.hash(str, 10);

export const validateHash = (str, hash) => bcrypt.compare(str, hash);
