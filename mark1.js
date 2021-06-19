function validate()
{
    var username=document.getElementById("user1");
    var  password=document.getElementById("pass1");

    if(username.value.trim()=="naveen" || password.value.trim()==1234)
    {
        alert("correct");
        return true;
    }
    else if(username.value!="naveen" || password.value!=1234)
    {
      alert("incorrect");
      return false;
    }
}