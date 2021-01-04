#!/usr/bin/env node

const businessCard = {
    firstName: "Per",
    lastName: "Eriksson",
    email: "per@interapp.se",
    phone: "+46 72 449 70 54",
    lovesNode: true,
    lovesBeerToo: true
};

console.log(JSON.stringify(businessCard, null, 4));
