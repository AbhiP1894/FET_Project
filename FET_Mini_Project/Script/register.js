$('#pwd,#cpwd').on('keyup', function () {
    if ($('#pwd').val() == $('#cpwd').val()) {
      $('#msg').html('Matching').css('color', 'green');
    }
    else
      $('#msg').html('Not Matching').css('color', 'red');
  });
  let users = [];
  const addUser = (ev) => {
    ev.preventDefault();
    let user = {
      id: Date.now(),
      emailid: document.getElementById('email').value,
      name: document.getElementById('name').value,
      contactNumber: document.getElementById('contact').value,
      password: document.getElementById('pwd').value,
      confirmPassword: document.getElementById('cpwd').value
    }
    users.push(user);
    document.forms[0].reset();
    console.warn('added', { users });
    let pre = document.querySelector('#mg pre');
    pre.textContent = '\n' + JSON.stringify(users, '\t', 2);
    localStorage.setItem('UserList', JSON.stringify(users));

  }
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addUser);
  });