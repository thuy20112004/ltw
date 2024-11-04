// lấy ra element của trang
const frmregister = document.getElementById("frmregister");
const userNameE = document.getElementById("userName");
const emailE = document.getElementById("email");
const passwordE = document.getElementById("password");
const repasswordE = document.getElementById("repassword");

// Element liên quan đến lỗi
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");

// lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// lắng nghe sự kiện submit form đăng ký tài khoản
frmregister.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  //Validate dữ liệu đầu vào
  if (!userNameE.value) {
    // hiển thị lỗi
    nameError.style.display = "block";
  } else {
    //ẩn lỗi
    nameError.style.display = "none";
  }
  if (!emailE.value) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    // kiểm tra định dạng email
    if (!validateEmail(email.value)) {
      emailError.style.display = "block";
      emailError.innerHTML = "Email không đúng định dạng";
    }
  }
  if (!passwordE.value) {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
  if (!repasswordE.value) {
    repasswordError.style.display = "block";
  } else {
    repasswordError.style.display = "none";
  }

  // kiểm tra mật khẩu với nhập lại mật khẩu
  if (passwordE.value !== repasswordE.value) {
    repasswordError.style.display = "block";
    repasswordError.innerHTML = "Mật khẩu không khớp";
  } else {
    repasswordError.style.display = "none";
  }

  // gửi dữ liệ từ form lên localStorage
  if (
    userNameE.value &&
    emailE.value &&
    passwordE.value &&
    repasswordE.value &&
    passwordE.value === repassword.value &&
    validateEmail(email.value)
  ) {
    // lấy dữ liệu từ form và gộp thành đối tượng user
    const user = {
      userID: Math.ceil(Math.random() * 10000000),
      username: userNameE.value,
      email: emailE.value,
      password: passwordE.value,
    };
    // Push user vào trong mảng userLocal
    userLocal.push(user);

    // lưu trữ giữ liệu trên local
    localStorage.setItem("users", JSON.stringify(userLocal));

    // Chuyển hướng về trang đăng nhập
    window.location.href = "login.html";
  }
});
