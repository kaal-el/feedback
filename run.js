
function sendInfo()

{
     var userFname = document.getElementById('fname').value;
	 var userMname = document.getElementById('mname').value;
	 var userLname = document.getElementById('lname').value;
	 var userSuggestion = document.getElementById('sug').value;
	 var userMale = document.getElementById('male').checked;
	 var userFemale = document.getElementById('female').checked;
	  if(userFname && userLname && userSuggestion)
	  {
		  if(userMname == "" || userMname == null)
		  {
		  if(userMale == userFemale)
		  {
			  alert("enter gender");
		  }
		  else if(userFemale == "" || userFemale == null)
		  { 
	          document.getElementById("p1").innerHTML += "Mr " + userFname + " " + userLname + " says " + "\n" + userSuggestion + "\n\n";
		  }
		  else{
			  document.getElementById("p1").innerHTML += "Mrs " + userFname + " " + userLname + " says " + "\n" + userSuggestion + "\n\n";
		  }
		  }
		  else
		  {
			  if(userMale == userFemale)
		  {
			  alert("enter gender");
		  }
		  else if(userFemale == "" || userFemale == null)
		  { 
	          document.getElementById("p1").innerHTML += "Mr " + userFname + " "+userMname + " " + userLname + " says " + "\n" + userSuggestion + "\n\n";
		  }
		  else{
			  document.getElementById("p1").innerHTML += "Mrs " + userFname + " " +userMname + " " + userLname + " says " + "\n" + userSuggestion + "\n\n";
		  }
		  }
		  
	  }
	 else 
	 {
		 alert("no required fields should be left");
	 }
	 
}

function clearInfo()
{
      document.getElementById("p1").innerHTML = ""; 
}	