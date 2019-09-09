$(document).ready(function(){
    var form = $('#blacklist');
    form.on('submit', function(e){
    e.preventDefault();
    var nmb = $('#number').val();
    var username = $('#username').val();
    window.open('http://Login:Pass@192.168.161.**:80/execsvcscriptplain?name=blacklist&startparam1='+nmb+'&startparam2='+username+'&async=0&timeout=10', 'name');
   // $('#result').load('http://LandingPage:QVlEmYq3@192.168.161.70:80/execsvcscript?name=blacklist&startparam1='+nmb+'&async=0&timeout=10');
});
});

$(document).ready(function(){
    var form = $('#ServiceNumberSet');
    form.on('submit', function(e){
    e.preventDefault();
    var OperLogin = $('#OperLogin').val();
    var ServiceNumber = $('#ServiceNumber').val();
    var OverWrite = document.getElementById('OverWrite').checked
    var username = $('#username').val();
    window.open('http://Login:Pass@192.168.161.**:80/execsvcscriptplain?name=ServiceNumber&startparam1='+OperLogin+'&startparam2='+ServiceNumber+'&startparam3='+OverWrite+'&startparam4='+username+'&async=0&timeout=10', 'name');
   // $('#result').load('http://LandingPage:QVlEmYq3@192.168.161.70:80/execsvcscript?name=blacklist&startparam1='+nmb+'&async=0&timeout=10');
});
});

// Используем инкостыляцию четез window.open(), поскольку из-за политики безопасноти и прокси не удалось установить Django-CORS-Headers