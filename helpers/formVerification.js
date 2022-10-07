export const formVerification = (name, email, message) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    return false;
  }

  if (name.length > 50 || email.length > 50 || message.length > 500) {
    return false;
  }

  if (!re.test(email)) {
    console.log('MAIL NOT VALID');
    return false;
  }

  return true;
};
