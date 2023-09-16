document.getElementById('submitBtn').addEventListener('click', function () {
    // Lấy giá trị từ các trường input
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cfpassword = document.getElementById('cmfpass').value;

    const isSpecialCharacter = (character) => {
        return /[\W_]/.test(character);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    };

    const isValidUsername = (username) => {
        return username.length >= 6 && !isSpecialCharacter(username[0]) && !isSpecialCharacter(username[username.length - 1]);
    };

    const isValidPassword = (password) => {
        return password.length >= 6 && !isSpecialCharacter(password[0]) && !isSpecialCharacter(password[password.length - 1]);
    };

    const isValidConfirmPassword = (password, cfpassword) => {
        return password === cfpassword;
    };

    const areFieldsValid = isValidEmail(email) && isValidUsername(username) && isValidPassword(password) && isValidConfirmPassword(password, cfpassword);

    if (!areFieldsValid) {
        alert("đăng ký lỗi")
    }
    else {
        // Nếu tất cả các kiểm tra qua, bạn có thể thực hiện xử lý tiếp theo ở đây

        // Tạo một đối tượng chứa thông tin đăng ký
        const registrationInfo = {
            email: email,
            username: username,
            password: password
        };

        // Lấy dữ liệu hiện có từ localStorage (nếu có)
        const existingData = JSON.parse(localStorage.getItem('users')) || [];

        // Thêm thông tin đăng ký mới vào mảng dữ liệu
        existingData.push(registrationInfo);

        // Lưu mảng dữ liệu mới vào localStorage
        localStorage.setItem('users', JSON.stringify(existingData));


       
        // alert('Registration successful!');
        location.href="./signin.html"
    }



});
