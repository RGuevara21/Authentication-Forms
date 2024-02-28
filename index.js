function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const showPasswordCheckbox = document.getElementById("showPassword");
  const eyeIconShow = document.getElementById("eye-icon-show");
  const eyeSlashIconHidden = document.getElementById("eye-slash-icon-hidden");

  const isVisible = showPasswordCheckbox.checked;

  passwordInput.type = isVisible ? "text" : "password";
  eyeIconShow.classList.toggle("hidden", isVisible);
  eyeSlashIconHidden.classList.toggle("hidden", !isVisible);
}
