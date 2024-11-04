// element của trang
const frmLogin = document.getElementById("frmLogin");
const emailE = document.getElementById("email");
const passwordE = document.getElementById("password");

// lắng nghe sự kiện submit form đăng ký tài khoản
frmLogin.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  // validate dữ liệu đầu vào

  // lấy dữ liệu từ local về
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // tìm kiếm email và mật khẩu người dùng nhập vào có tồn tại trên local;
  const findUser = userLocal.find(
    (user) => user.email === emailE.value && user.password === passwordE.value
  );

  if (!findUser) {
    // nếu không thì thông báo cho người dùng nhập lại dữ liệu
    alert("Email hoặc mật khẩu không đúng");
  } else {
    // nếu có thì đăng nhập thành công và chuyển hướng về trang chủ
    window.location.href = "index.html";
  }

  // Nếu có thì đăng nhập thành công và chuyển hướng về trang chủ

  // Nếu không thì thông báo cho người dùng nhập lại dữ liệu
});
