
let btn = document.querySelector("#button");

   async function myfunction(){
    const username= document.getElementById('username').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    console.log(username);
    console.log(email);
    console.log(password);

    data = {username,email,password};
    console.log(data);

    const result = await fetch('http://localhost:3000/api/auth/register',{
        method: 'POST',
        mode:'cors',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res)=>res.json());

    // console.log(result);
    if(result.success){
        window.location.assign("after.html");
    }

}


