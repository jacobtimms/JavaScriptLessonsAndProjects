function validateForm1() {
  var login = document.forms["customer_login"]["customer_email"].value;
  var email = document.forms["customer_login"]["customer_password"].value;

  if (login == null || login == "", email == null || email == "") {
    alert("Please Fill In All Required Field");
  } else { window.location.href = './index.html' };
}

function validateForm2() {
  var firstName = document.forms["create_customer"]["first_name"].value;
  var lastName = document.forms["create_customer"]["last_name"].value;
  var email = document.forms["create_customer"]["email"].value;
  var password = document.forms["create_customer"]["password"].value;
  
  if (firstName == null || firstName == "", lastName == null || lastName == "", email == null || email == "", password == null || password == "") {
    alert("Please Fill In All Required Field");
  } else { window.location.href = './index.html' };
}