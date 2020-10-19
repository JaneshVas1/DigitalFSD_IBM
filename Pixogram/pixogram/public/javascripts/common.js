function getFollowers()
{
    console.log("testuser");
    fetch("/followers/pppppppp"+, {
        method: 'GET',
        // body: JSON.stringify({user: document.getElementById.("username").value, password: $("#password").val()}),
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
    console.log("get Users");
    window.location.href = '/search';

}