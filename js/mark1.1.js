function validate2()
{
    var username=document.getElementById("user1");
    var  password=document.getElementById("pass1");
    var password1=document.getElementById("pass2")

    if(username.value.trim()=="naveen" || password.value.trim()==1234 || password1.value.trim()==1234)
    {
        alert(passwordisset);
        return true;
    }
    else if(username.value!="naveen" || password.value!=1234 || password1.value.trim()=="")
    {
      alert("set password");
      return false;
    }
}