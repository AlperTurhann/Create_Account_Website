document.getElementById("create-account").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const location = document.getElementById("location").value;
  const education = document.getElementById("education").value;
  const job = document.getElementById("job").value;
  const description = document.getElementById("description").value;

  sessionStorage.setItem('name', name);
  sessionStorage.setItem('mail', mail);
  sessionStorage.setItem('location', location);
  sessionStorage.setItem('education', education);
  sessionStorage.setItem('job', job);
  sessionStorage.setItem('description', description);
  
  window.location.href = "/Create_Account_Website/profile.html";
}