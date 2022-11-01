

function Guardar() {
    localStorage.setItem("usuario", document.getElementById("nombre").value);

}

document.getElementById("saludo").innerHTML = "Hola " + localStorage.getItem("usuario");

$(document).ready(function () {
    var touch = $('#touch-menu');
    var menu = $('.menu');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

//carrusel
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//grafico

Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Temperaturas promedio mensual'
    },
    subtitle: {
        text: 'Barcelona'
    },
    xAxis: {
        categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    },
    yAxis: {
        title: {
            text: 'Temperatura (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Max',
        data: [13.0, 15.0, 17.0, 19.0, 23.0, 27.0, 30.0, 30.0, 27.0, 22.0, 17.0, 14.0]
    }, {
        name: 'Min',
        data: [7.0, 8.0, 9.0, 11.0, 14.0, 18.0, 21.0, 21.0, 19.0, 15.0, 11.0, 8.0]
    }]
});


//mapa


function myMap2() {

  var coord= {lat:41.3913489,lng:2.1642656};
  var map=new google.maps.Map(document.getElementById('map'),
  
  { center: coord,
      zoom:15,})};

  

function myMap() {
    var mapProp= { center:new google.maps.LatLng(41.3913489,2.1642656), 
        zoom:15,};
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);}
 
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7B23TpvYl3wPFjt1qCBLpFuVWrvr1gcI=myMap"

 ///AIzaSyA7B23TpvYl3wPFjt1qCBLpFuVWrvr1gcI

//clima


///!function(d,s,sectionclima){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(sectionclima)){js=d.createElement(s);js.id=sectionclima;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

///!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

 
