function isValidPassword(password) {
  if (password.length <= 8) return false;

  const hasLetter = /[a-zA-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  if (!hasLetter || !hasNumber) return false;

  if (/\s/.test(password)) return false;

  return true;
}

export { isValidPassword };
