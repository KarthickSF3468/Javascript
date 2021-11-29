
    var regx=/^[A-Z]{1,2}-[a-z A-z]{6,20}/;
    var regx1 =/^[a-z 0-9 /.-]+@[a-z 0-9] .([a-z] {2-8}.).([a-z]{2-8})/;
    var regx2=/^([7-9]{1})([0-9]{9})/;
    
    function validation()
    {
       var inputs = document.getElementsByTagName("input");
       for (var i = 0; i < inputs.length; i++) {
           if (inputs[i].value == "") {
               inputs[i].style.border = "red solid 2px";
               
           }
           else {
               inputs[i].style.border = " grey solid 2px";
   
           }
       }
       var name=document.getElementById("lname");
       var fathername=document.getElementById("lfathername");
       var mail = document.getElementById("lemail");
       if (regx1.test(mail.value.trim())) {
        mail.style.border = "green solid 2px";
        document.getElementById("lmail").style.visibility="hidden";
        }
        else {
            mail.style.border = "red solid 2px";
            document.getElementById("lmail").style.visibility="visible";
        }
        if(regx.test(name.value.trim())){
            name.style.border="solid green 2px";
            document.getElementById("lname").style.visibility="hidden";
        }
        else {
            name.style.border = "red solid 2px";
            document.getElementById("lname").style.visibility="visible";
    
        }
        if(regx.test(fathername.value.trim())){
            fathername.style.border="green solid 2px";
            document.getElementById("lfathername").style.visibility="hidden";
        }
        else {
            fathername.style.border = "red solid 2px";
            document.getElementById("lfathername").style.visibility="visible";
    
        }
        if (regx2.test(mobile.value.trim())) {
            mobile.style.border = "green solid 2px";
            document.getElementById("lphone").style.visibility="hidden";
        }
        else {
            mobile.style.border = "red solid 2px";
            document.getElementById("lphone").style.visibility="visible";
        }
    }