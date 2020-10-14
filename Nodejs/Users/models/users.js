const users = [];
module.exports= class User{
    constructor(t) {
        this.uname=t;
    }
    save()
    {
        users.push(this)
    }

    static fetchAll()
    {
        return users;
    }

}