function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email
    this.password = password
}

const user1 = new createUser("amita", "amita@fb.com", "123")
console.log(user1);
