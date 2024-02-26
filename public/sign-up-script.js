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

function toggleConfirmPasswordVisibility() {
  const confirmPasswordInput = document.getElementById("confirm-password");
  const showConfirmPasswordCheckbox = document.getElementById(
    "showConfirmPassword"
  );
  const eyeIconShow2 = document.getElementById("eye-icon-show-2"); // Corrected ID
  const eyeSlashIconHidden2 = document.getElementById(
    "eye-slash-icon-hidden-2"
  ); // Corrected ID

  const isVisible = showConfirmPasswordCheckbox.checked;

  confirmPasswordInput.type = isVisible ? "text" : "password";
  eyeIconShow2.classList.toggle("hidden", isVisible);
  eyeSlashIconHidden2.classList.toggle("hidden", !isVisible);
}
