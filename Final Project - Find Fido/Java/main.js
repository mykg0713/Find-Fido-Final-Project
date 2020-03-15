$(document).ready(function(){
    $("#submit").click(function(){
    
    var email = $("#email").val();

    // Returns successful data submission message when the entered information is stored in database.
    var dataString = '&email1='+ email;
    if(email=='')
    {
    alert("Please Enter Your Email Address");
    }
    else
    {
    // AJAX Code To Submit Form.
    $.ajax({
    type: "POST",
    url: "submit.php",
    data: dataString,
    cache: false,
    success: function(result){ console.log('Good Job');
    alert(result);
    }
    });
}
return false;
    });
});