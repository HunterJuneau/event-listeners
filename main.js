'use strict';

const welcome = (name) => {
    return `Welcome to my website, ${name}!`;
};

const goodDay = (name) => {
    return `Bye ${name}, have a good day!`;
};

const message = (name, cb) => {
    return cb(name);
};