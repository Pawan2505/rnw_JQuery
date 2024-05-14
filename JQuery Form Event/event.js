$(document).ready(function(){
 $('#sname, #sclass, #scountry').focus(function(){
$(this).css('background-color','lime');
 });

$('#sname, #sclass, #scountry').blur(function(){
    $(this).css('background-color','orange');
});

// $('#sname, #sclass, #scountry').change(function(){
//     $(this).css('background-color','pink');
// })


// Note : 
//     1. Ap yaha dekh rhe hoge jab apne val() form event ka use kiya to iska mtlb tha jo apne value enter kiya hai use utha k kahi aur use PublicKeyCredential. like hame html() method se test id me o content display kara diya hai.

$(' #scountry').change(function(){
    // $(this).css('background-color','pink');
    var a = $(this).val();
    $('#test').html(a); 
})

$('#sname, #sclass').select(function(){
    $(this).css('background-color','yellow');
});

$('#sform').submit(function(){
    alert("Form Submitted");
})

});