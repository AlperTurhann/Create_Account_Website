document.getElementById("create-account").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  const location = document.getElementById("location").value;
  const education = document.getElementById("education").value;
  const job = document.getElementById("job").value;
  const description = document.getElementById("description").value;

  sessionStorage.setItem('Name', name);
  sessionStorage.setItem('Mail', mail);
  sessionStorage.setItem('Location', location);
  sessionStorage.setItem('Education', education);
  sessionStorage.setItem('Job', job);
  sessionStorage.setItem('Description', description);

/*
  var url = "profile.html?name=" + encodeURIComponent(name) + "&mail=" + encodeURIComponent(mail) + "&location=" + encodeURIComponent(location) + "&education=" + encodeURIComponent(education) + "&job=" + encodeURIComponent(job) + "&description=" + encodeURIComponent(description);
*/
  window.location.href = "Create_Account_Website/profile.html";
}