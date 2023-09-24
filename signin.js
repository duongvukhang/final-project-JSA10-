document.getElementById('signinbtn').addEventListener('click', function () {

    const datafk =localStorage.getItem("users")
    const data = JSON.parse(datafk)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const isUserExists = data.some((user) => {
        
        return user.username === username & user.password === password;
      });
      
      if (isUserExists) {
    //    alert ("đăng nhập thành công")
        location.href="./index.html"
      } else {
        alert ("đăng nhập không thành công")
      }
} );