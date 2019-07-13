import { sendData, validateEmail, setEventIfElementExist } from './util.js';
const signInButton = document.getElementById('signin-btn');
const signOutButton = document.getElementById('signout-btn');
const signInIdInput = document.getElementById('signin-id-input');
const signInPasswordInput = document.getElementById('signin-password-input');
const signUpIdInput = document.getElementById('signup-id-input')
const signUpPasswordInput = document.getElementById('signup-password-input')
const signInCloseButton = document.querySelector('.uk-modal-close-default');

setEventIfElementExist(signInButton, 'click', async e => {
  e.preventDefault();

  const email = signInIdInput.value;
  const password = signInPasswordInput.value;

  if (!validateEmail(email)) {
    UIkit.notification('이메일 형식이 맞지 않습니다.', {status: 'danger'});
    signInIdInput.value = '';
    signInIdInput.focus;
    return;
  }

  if (!password){
    signInPasswordInput.focus;
    // alert('최소 한 글자의 대소문자와 특수문자를 포함하면서, 여덟 글자 이상이어야 합니다.');
    return;
  }

  signInButton.setAttribute('disabled', 'true');

  try {
    const res = await sendData('POST', '/auth/signin', {email, password});

    if (res.redirected) {
      location.href = res.url;
    }

  } catch (error) {
    console.error(error);
    signInButton.setAttribute('disabled', 'false');
  }
});

setEventIfElementExist(signInCloseButton, 'click', e => {
  e.preventDefault();
  signInIdInput.value = '';
  signInPasswordInput.value = '';
});

setEventIfElementExist(signOutButton, 'click', async e => {
  e.preventDefault();

  signOutButton.setAttribute('disabled', 'true');

  try {
    const res = await sendData('POST', '/auth/signout');
    console.log(res);
    if (res.redirected) {
      location.href = res.url;
    }

  } catch (error) {
    console.error(error);
    signOutButton.setAttribute('disabled', 'false');
  }
});