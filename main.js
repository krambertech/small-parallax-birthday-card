function scrollFire() {
    console.log('scroll');
}

$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

    var options = [

        {selector: '#map-image', offset: 200, callback: 'Materialize.fadeInImage("#map-image")' },
        {selector: '#kiev', offset: 300, callback: 'Materialize.fadeInImage("#kiev")' },
        {selector: '#lviv', offset: 400, callback: 'Materialize.fadeInImage("#lviv")' },

        {selector: '#time-list', offset: 400, callback: 'Materialize.showStaggeredList("#time-list")' },

        {selector: '#pic-flat1', offset: 200, callback: 'Materialize.fadeInImage("#pic-flat1")' },
        {selector: '#pic-flat3', offset: 200, callback: 'Materialize.fadeInImage("#pic-flat3")' },
        {selector: '#pic-flat4', offset: 200, callback: 'Materialize.fadeInImage("#pic-flat4")' },
        {selector: '#pic-flat5', offset: 200, callback: 'Materialize.fadeInImage("#pic-flat5")' }
    ];

    var now = new Date();
    var targetDate = new Date("10 July 2015 22:45");

    var time = (targetDate - now) / 1000;

    var clock = $('.countdown').FlipClock(time, {
        autoStart: true,
        countdown: true,
        clockFace: 'DailyCounter'
    });

    Materialize.scrollFire(options);
});