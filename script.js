function contactfrm(){
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("phone").value;
    let d = document.getElementById("textarea").value;
    
    if(a=="" || b=="" || c=="" || d=="")
        {
            alert('Please fill all details')
            return false;
        }
    else if(c.length>10 || c.length<10) 
        {
            alert('Please enter 10 digit number')
            return false;
        }   
    else if(isNaN(c))
        {
            alert('Only number is valid')
            return false;
        }
    else
        {
            true;
        }    
}
