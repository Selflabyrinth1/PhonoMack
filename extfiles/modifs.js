function mailme() {
  x=document.forms["frm1"];
  if (x.elements[0].value>=13){
    document.getElementById("al").style.display="none";
    Email.send({
	Host: "smtp.gmail.com",
	Username : x.elements[2].value,
	Password : x.elements[3].value,
	To : 'georgiou.ionathan@gmail.com',
	From : x.elements[2].value,
	Subject : "PhonoMack-Feedback",
	Body : x.elements[4].value,
	}).then(
		message => alert("mail sent successfully")
	);
    document.getElementById("al").innerHTML="Your feedback has been submitted!";
  }
  else {
    document.getElementById("al").style.display="block";
    document.getElementById("al").innerHTML="Invalid input! You must be above 13 to send feedback!";
  }
}

function resetage() {
  document.getElementById("al").style.display="none";
}
