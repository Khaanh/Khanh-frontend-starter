// $(function(){

//   console.log('ready')
//   $('.nav').addClass('abaacaaa')

//   $('.header').addClass('header2')

//   console.log('a')


// })



$(document).ready(function() {
  $('.header').addClass('asdasdasdasdasdasd')
  
  $('.header').on('click', function() {
    $(this).toggleClass('this')
  })
  
  
  // let nextSection = document.getElementByClassName('js-next');
  // let scrollDown = document.getElementByClassName('js-scroll-down');
  
  
  // function handleButtonClick(e) {
  //   e.preventDefault();
  //   nextSection.scrollIntoView({
  //     behavior: "smooth"
  //   });
  // }
  
  // scrollDown.addEventListener('click', handleButtonClick);
  
  $('.scroll-block').mCustomScrollbar();
  
  
  
  var hiddenElement = document.getElementById("js-next");
  var btn = document.querySelector('.js-scroll-down');
  
  function handleButtonClick() {
    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
  }
  
  btn.addEventListener('click', handleButtonClick);
})
