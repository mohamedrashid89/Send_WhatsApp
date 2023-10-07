function SendWhatsapp() {
    var url = "https://api.whatsapp.com/send?phone=+916235493589" + PhoneNumber;
    


    
    var PhoneNumber = "+916235493589";


    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var country = document.querySelector('.country').value;
    var message = document.querySelector('.message').value;
    
    var url = "https://wa.me/" + PhoneNumber + "?text=" 
    + "Name : " +name+"%0a"
    + "Email : " +email+"%0a"
    + "Country : " +country+"%0a"
    + "Message : " +message+"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
}
 