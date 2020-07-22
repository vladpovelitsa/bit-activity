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
  	 
  	  var emailLink = item.previousElementSibling;  
  	  var range = document.createRange();  
  	  range.selectNode(emailLink);  
  	  window.getSelection().addRange(range);  
  	    
  	  try {  
  	    var successful = document.execCommand('copy');  
  	    var msg = successful ? 'successful' : 'unsuccessful';  
  	  }catch(err) {  
  	    console.log('Oops, unable to copy');  
  	  }   
  	 
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
    var nav = document.querySelector('.nav')
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

// alert(window.innerWidth)


if (document.getElementById('canvas')) {
  var ctx = document.getElementById('canvas').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Short deposits',
            backgroundColor: '#1F78B4',
            borderColor: '#1F78B4',
            data: [
              1,
              25,
              65,
              33,
              57,
              21,
              10
            ],
            fill: false,
          }, {
            label: 'Balance deposit',
            fill: false,
            backgroundColor: '#B2DF8A',
            borderColor: '#B2DF8A',
            data: [
              10,
              15,
              12,
              14,
              17,
              25,
              56
            ],
          }]
      },
      options: {
          title: {
            display:'true',
            text:'Deposits',
            fontSize: 30,
            fontFamily:"'Circe', sans-serif",
            fontColor:'#0497FD',
            padding: 40,
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          legend: {
              display: true,
              position:'bottom',
              align:'start',
          },
          layout: {
              padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 20,
              }
          }
      }
  });  
}
if (document.getElementById('canvas2')) {
  var ctx2 = document.getElementById('canvas2').getContext('2d');
  var myChart = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Project balance (USD)',
            backgroundColor: '#1F78B4',
            borderColor: '#1F78B4',
            data: [
              10,
              15,
              35,
              43,
              57,
              61,
              90
            ],
            fill: false,
          },]
      },
      options: {
          title: {
            display:'true',
            text:'Project value',
            fontSize: 30,
            fontFamily:"'Circe', sans-serif",
            fontColor:'#0497FD',
            padding: 40,
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          legend: {
              display: true,
              position:'bottom',
              align:'start',
          },
          layout: {
              padding: {
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 20,
              }
          }
      }
  });  
}

$('.team_slider').slick({
  infinite: true,
  autoplay:true,
  autoplaySpeed: 3000,
  slidesToShow: 7,
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
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.start_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.faq_slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: '.faq-next',
  prevArrow: '.faq-prev',
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


function tabs(){
  var e = event.target;
  var currentTabs;
  getTabs(event);
  changeTab(e, getTabs(event));

}

function getTabs(e) {
  if (event.target.classList.contains('tab_toggler')) {
    for (var i = 0; i < event.path.length; i++) {
      if(event.path[i].classList.contains('tabs')) {
        var currentTabs = event.path[i];
        return currentTabs
      }
    }
  }
}
function changeTab(elem,parent) {
  if (elem.classList.contains('tab_toggler')) {
    parent.querySelectorAll('.tab_content').forEach((item) => {
      item.classList.remove('active');
    })
    parent.querySelectorAll('.tab_toggler').forEach((item) => {
      item.classList.remove('active');
    })
    elem.classList.add('active')
    parent.querySelector(elem.getAttribute('data-target')).classList.add('active')
  }
}

document.addEventListener('click', tabs);