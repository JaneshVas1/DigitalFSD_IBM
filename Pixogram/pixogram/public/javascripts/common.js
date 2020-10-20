function getFollowers()
{
    alert("inside");
    fetch("/followers/pppppppp", {
        method: 'GET',
         //body: JSON.stringify({user: "pppppppp" }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content
        }
    }).then(res => {
        return res.json();
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });

}

function getUsers() {
    alert("inside");
   // window.location.href = '/search';

}

function addFollowers(token)
{
    alert("inside"+token);

    fetch("/followers/add-follower/", {
        method: 'POST',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });

}



function deleteFollowers()
{
    alert("inside");

    fetch("/followers/pppppppp", {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });

}



function addMedia()
{
    alert("inside");
/*
    fetch("/media/add-media", {
        method: 'POST',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });


 */
}


function deleteMedia()
{
    alert("inside");
/*
    fetch("/media/pppppppp", {
        method: 'DELETE',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
        //body: JSON.stringify({username: "pppppppp", followerusername: "poasertpp"}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // Indicates the content
            //'Authorization':'jwt '+token
        }
    }).then(res => {
        console.log(res);// {success: true/false, data: {}, message: ""}

        if(res.success){
            window.location.href = '/images/';
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });


 */
}