/*form validation functions*/
function validateform()
{
    var uname=document.login.acno.value;
    //alert(fname);
    var pswd=document.login.pwd.value;
    //alert(lname);
    if(uname=="")
    {
        alert("please enter username");    
        document.login.acno.focus();
        return false;
    }
    if(pswd=="")
    {
        alert("please enter password");
        document.login.pwd.focus();
        return false;
    }
}