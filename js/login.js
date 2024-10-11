// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống các trường");
  } else {
    // Lấy người dùng từ localStorage dựa trên username đã nhập
    const user = JSON.parse(localStorage.getItem(inputUsername.value));

    // Kiểm tra nếu username không tồn tại trong localStorage
    if (!user) {
      alert("Tài khoản không tồn tại!");
    } else {
      // Nếu username đúng, tiếp tục kiểm tra password
      if (user.password === inputPassword.value) {
        alert("Đăng Nhập Thành Công");
        window.location.href = "trangchu.html"; // Chuyển hướng tới trang chính
      } else {
        alert("Sai mật khẩu. Vui lòng thử lại!");
      }
    }
  }
});