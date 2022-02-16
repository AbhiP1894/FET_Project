        // Example starter JavaScript for disabling form submissions if there are invalid fields
        /*(function() {
          'use strict';
          window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add('was-validated');
              }, false);
            });
          }, false);
        })();



        function user1() {
  var user = document.getElementById('validationCustom03').value
  var pass = document.getElementById('validationCustom04').value
  if (user == "admin" && pass == "root") {
    window.open("getp.html")
    alert('correct username')
  } else {
    window.open("get2.html")
    alert('incorrect username or password')
  }
}*/



//checking
function check(){
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');
    
    var userName = document.getElementById('userEmail');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");
    
    if(userEmail.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.open("forums.html")
    }
    else if (userEmail.value == "admin@123" && userPw.value == "root") {
      alert('You are logged in.');
        window.open("adminHome.html")
    }
    else{
        alert('Error on login');
    }
    }