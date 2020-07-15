var sections = document.querySelectorAll('.section');
var offset = innerHeight * 0.9;
function setAnimation() {
  sections.forEach(function(item) {
    if (item.getBoundingClientRect().top < offset) {
      item.classList.add('animated')
      var timeout = setTimeout(function(){
        item.classList.add('animation_ends')
      },7000)
    }
  })
}

document.addEventListener('scroll', setAnimation)
setAnimation()


function modalControls(e){
  var body = document.querySelector('body');
  if (e.target.classList.contains('modal_btn')) {
    event.preventDefault()
    if (document.querySelector('.modal.active')) {
    	var modal = document.querySelector('.modal.active');
    	modal.classList.remove('active');
    }
    var modal = document.getElementById(e.target.getAttribute('data-target'));
    modal.classList.add('active');
    body.classList.add('overlay');
  }
  if (e.target.classList.contains('modal') || e.target.classList.contains('close') || e.target.classList.contains('close_modal')) {
    var modal = document.querySelector('.modal.active');
    modal.classList.remove('active');
    body.classList.remove('overlay');
    console.log('close')
  }
}

document.addEventListener('click', modalControls)

if ( document.querySelector('.btn-copy')) {
	var copyEmailBtn = document.querySelectorAll('.btn-copy');  
  	copyEmailBtn.forEach((item) => {
      item.addEventListener('click', function(event) {  
  	  // Выборка ссылки с электронной почтой 
  	  var emailLink = item.previousElementSibling;  
  	  var range = document.createRange();  
  	  range.selectNode(emailLink);  
  	  window.getSelection().addRange(range);  
  	    
  	  try {  
  	    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
  	    var successful = document.execCommand('copy');  
  	    var msg = successful ? 'successful' : 'unsuccessful';  
  	  }catch(err) {  
  	    console.log('Oops, unable to copy');  
  	  }   
  	    
  	  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  	  // removeRange(range) когда это возможно
  	  window.getSelection().removeAllRanges();  
  	});
  })
}

var notifyHeight = 80;
var notifyCounter = 0

function notifications(e) {
  if (e.target.classList.contains('show-notify')) {
    if (e.target.classList.contains('show-success')) {
      document.querySelector('.notification-success').classList.add('notification-active')
    }
    if (e.target.classList.contains('show-error')) {
      document.querySelector('.notification-error').classList.add('notification-active')
    }
    if (e.target.classList.contains('show-warning')) {
      document.querySelector('.notification-warning').classList.add('notification-active')
    }
    document.querySelectorAll('.notification')[notifyCounter].style.top = notifyHeight * notifyCounter + 20 + 'px';
    notifyCounter++
  }
  else if (e.target.classList.contains('notification')) {
    for (var i = 0; i < document.querySelectorAll('.notification-active').length; i++) {
      console.log(document.querySelectorAll('.notification-active')[i].style.top)    
    }
    notifyCounter--
    e.target.style.top = '-300px';
  }
}

document.addEventListener('click', notifications)

function navControls() {
    var elem = event.target
    var nav = document.querySelector('nav')
    if (elem.classList.contains('show_menu')) {
        elem.classList.toggle('active')
        nav.classList.toggle('active')
    }

    if (document.querySelector('.search_toggler')) {
      if (elem.classList.contains('search_toggler')) {
        document.querySelector('.search_form').classList.toggle('active');
      }
      else {
        var notHide = false;
        event.path.forEach((item)=>{
            if(item == document.querySelector('.search_form')) {
              notHide = true
              return notHide
            }
        })
        if (notHide) {
          return
        }
        else {
          document.querySelector('.search_form').classList.remove('active');

        }
      }
    }

    if (elem.classList.contains('user_nav-show')) {
      document.querySelector('.user_nav').classList.toggle('active')
    }
    if (elem.classList.contains('lk_nav-toggler')) {
      document.querySelector('.lk_nav').classList.toggle('active')
    }
}

document.addEventListener('click', navControls)

function setNumber(){
  var e = event.target
  if (e.classList.contains('input_block_number-item')) {
    e.parentNode.previousElementSibling.querySelector('input').value = parseInt(e.innerText)
  }
}

document.addEventListener('click', setNumber)

initPawSelect('.paw-select');

$('.systems_slider').slick({
  infinite: true,
  autoplay:true,
  autoplaySpeed: 3000,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
