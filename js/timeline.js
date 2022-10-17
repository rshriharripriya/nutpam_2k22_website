var GreenLine = $('.theGreenLine');
var stops = $('.stop');

TweenMax.set(GreenLine, {strokeWidth: 2, drawSVG: "0%"});
TweenMax.set(stops, {autoAlpha: 1, scale: 0, transformOrigin: "center"});

// ==============================
TweenLite.defaultEase = Power0.easeNone;
var topEase = Elastic.easeOut.config(1.5, 1);

// time should  be adjusted relative to window width
// e.g. ww < 500  it should be 8 - 12

var time = 9;
var time02 = 3;
var timestop01 = time / 5.55;
var timestop02 = time / 2.68;
var timestop03 = time / 2.8;
var timestop04 = time / 2.4;
var timestop05 = time / 2.03;
var stop = .5;

var action = new TimelineMax({paused: true})
  .to(GreenLine, time, {drawSVG: "0% 75%"})
  .to(GreenLine, time02, {drawSVG: "0% 100%"}) // option: separate sections, individual timings
  .to(GreenLine, time, {strokeWidth: 20}, 0)
  .to('.stop01', stop, {scale: 1}, timestop01)
  .to('.end', 0.3, {autoAlpha: 1}, timestop01)
  .to('.stop02', stop, {scale: 1}, timestop02)
  .to('.stop03', stop, {scale: 1}, timestop03)
  .to('.stop04', stop, {scale: 1}, timestop04)
  .to('.stop05', stop, {scale: 1}, timestop05)
//.to('.end',stop,{autoAlpha:1},time + time02)


// media query event handler
var factor;

const mq = window.matchMedia("(min-width: 500px)");

if (matchMedia) {
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {

    factor = .95;

  } else {

    factor = .8;
  }
}

WidthChange(mq);

// === scrolling sync  by requestAnimationFrame  ===========
// Based on https://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events

var latestKnownScrollY = 0,
  lastScrollTop = 0,
  ticking = false;


function onScroll() {
  latestKnownScrollY = window.scrollY; //No IE8
  requestTick();
}

function update() {
  // reset the tick so we can
  // capture the next onScroll
  ticking = false;
  scrollDistance = $('.line').height() * 1;

  scrollPercent = $(window).scrollTop() / (scrollDistance - $(window).height());

  var progressAction = scrollPercent * factor; // factor x

  if (latestKnownScrollY > lastScrollTop) {  // downscroll
    TweenLite.to(action, 0, {progress: progressAction, ease: Power0.easeNone});
  } else {
    TweenLite.to(action, 0, {progress: progressAction, ease: Power0.easeNone});
  }

  lastScrollTop = latestKnownScrollY;
  console.log(scrollDistance);

}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
  }
  ticking = true;
}

window.addEventListener('scroll', onScroll, false);

// . lodash.js ===========
$(window).on('resize', _.debounce(function () {

  update();
}, 400));
