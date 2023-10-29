let user =localStorage.getItem("user");
if(user){
    user = JSON.parse (localStorage.getItem("user"));

    document.addEventListener("DOMContentLoaded",()=> {
        const nameEl =document.getElementById("name")
        const emailEl =document.getElementById("email")
        const avatarEl =document.getElementById("avatar")

        
        nameEl.innerHTML =user.displayName;
        emailEl.innerHTML=user.email;
        avatarEl.src=user.photoURL;

        // logout
        const LogoutBtn =document.getElementById("Logout");
        LogoutBtn.addEventListener("click",()=>{
            localStorage.removeItem("user");
            window.location.href="./signin.html"
        })
            

    })

   
    

}else{
    window.location.href = "signin.html";
}