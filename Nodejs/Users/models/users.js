//const users = [];
const fs = require('fs');
const path = require('path');

module.exports= class User{
    constructor(t) {
        this.uname=t;
    }
    save()
    {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'users.json'
        );

        fs.readFile(p, (err, fileContent) => {
            let users = [];
            if (!err) {
                if (fileContent.length>0)
                    users = JSON.parse(fileContent);
            }
            users.push(this);
            fs.writeFile(p, JSON.stringify(users), err => {
                console.log(err);

            });
        });


        //users.push(this)
    }

    static fetchAll(users)
    {

        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'users.json'
        );

        fs.readFile(p, (err, fileContent) => {
            if (err) {
                users([]);

            }
            if (fileContent.length>0)
                users(JSON.parse(fileContent));
            else
                users([]);
        });

    }

    static delete()
    {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'users.json'
        );
        fs.truncate(p, 0, function(){console.log('done')})

    }

}