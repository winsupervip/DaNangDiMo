function generatePassword(): string {
 // Chuỗi các ký tự có thể sử dụng
 const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
 // Độ dài của mật khẩu
 const length = 8;
 // Khởi tạo mật khẩu rỗng
 let password = "";
 // Lặp qua từng ký tự của mật khẩu
 for (let i = 0; i < length; i++) {
  // Chọn một ký tự ngẫu nhiên từ chuỗi chars
  const randomChar = chars[Math.floor(Math.random() * chars.length)];
  // Nối ký tự vào mật khẩu
  password += randomChar;
 }
 // Trả về mật khẩu
 return password;
}

export const passwordUtil = {
 generatePassword,
};
