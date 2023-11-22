import bcrypt from 'bcryptjs';

const users = [
    {
        firstName: "Javokhir",
        lastName: "Khakimjonov",
        username: "Jay Khakim",
        gender: "Male",
        email: "mgmediajay@gmail.com",
        phoneNumber: '01082777117',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        firstName: "Ibrohim",
        lastName: "Khakimjonov",
        username: "Ibey",
        gender: "Male",
        email: "examples@gmail.com",
        phoneNumber: '01082777117',
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    

]

export default users;