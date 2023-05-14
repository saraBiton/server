const db = require('../db')

async function GetAllUsers(){
    const data = await db.query(`
    select * from Users`);
    return data;
}
async function GetAllProviders(){
    const data = await db.query(`
    select * from Providers`);
    return data;
}
async function addUser(user){
    const data = await db.query(`
    INSERT Users
VALUES (${user})`);
    return data;
}
 
module.exports = {GetAllUsers,GetAllProviders,addUser}//תייצג את כל הפונקציות מה לייצא החוצה
