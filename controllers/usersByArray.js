const users = [{ 'id': 1, 'name': 'Orit' }, { 'id': 2, 'name': 'Alel' }, { 'id': 3, 'name': 'Shira' }];

const addUser = (user) => {
    users.push(user);
    return users;
}
 
const getAll = () => {
    return users;
}

const DeleteUser = (id) => {
    const index = users.findIndex(u => u.id == id);
    console.log(index)
    users.splice(index, 1);
    return 'Deleted successfully';
}

const getById = (id) => {
    const user = users.find(u => u.id == id);
    return user;
}
const UpdateUser = (id,user) =>{
    const index = users.findIndex(u=>u.id == id);
    users[index] = user;
    return 'Updated successfully'
}


module.exports = { getAll , DeleteUser,getById,addUser,UpdateUser}//תייצג את כל הפונקציות מה לייצא החוצה
