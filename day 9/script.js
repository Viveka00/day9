 document.getElementById('submitbtn').addEventListener('click',()=>{
    let username = document.getElementById("usertextbox").value
    let password = document.getElementById("password").value

    const response = fetch("https://ahaya-looks-backend.vercel.app/api/vl/test",{
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({
            user:username,
            type:password
        })
    }).then(res=>{
        window.location.replace("./2.html")
    }).catch(err=>{
        alert("wrong credentials")
    })
 })