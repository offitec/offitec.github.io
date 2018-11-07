$(function(){

	$('a.page-scroll').on('click', function(event) {
        var element = $(this);
        var section = $(element.attr('href'));
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000);
        event.preventDefault();
    });

    var form = document.getElementById("form");
    var result = document.getElementById("result");
    var send = document.getElementById("send");

    var name = form.nombre;
    var email = form.email;
    var message = form.mensaje;

    form.addEventListener('submit', check);

    function check(e){
        e.preventDefault();
        /*
        https://www.w3schools.com/jquery/ajax_post.asp
        $(selector).post(URL,data,function(data,status,xhr),dataType)
        */
        $.post(
            "https://jocode.000webhostapp.com/mail", 
            {
                "send": "send",
                "name": name.value,
                "email": email.value,
                "message": message.value
            }, 
            function(response){
                if (response.status){
                    result.classList.toggle('alert-success');
                    result.innerText = response.message;
                    form.reset();
                } else {
                    result.classList.toggle('alert-danger');
                    result.innerText = response.message;
                }
            },
            'json'
        );
    }

    function disabledButton(){
        send.setAttribute('disabled', true);
    }

});