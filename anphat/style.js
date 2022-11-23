$('.lazy1').slick({
    autoplay:true,
    autoplaySpeed: 4000,
    speed : 2500,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev" style="width:55px; height:55px; "><i class="bi bi-chevron-compact-left" style="font-size: 35px; color : #198c5f;"></i></button>',
    nextArrow: '<button type="button" class="slick-next" style="width:55px; height:55px; font-size: 35px; "><i class="bi bi-chevron-compact-right" style="color : #198c5f; font-size: 35px; "></i></button>'
  });
  $('.lazy2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 599,
      settings: {
        slidesToShow: 1
      }
    }]
    
  });
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 599,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.autoplay1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 626,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.autoplay_partner').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 599,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  $('.list_youtube').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [{
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 625,
      settings: {
        slidesToShow: 2
      }
    }]
  });

  $('.demoNew').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    arrows: false,
    vertical:true, 
  });


  // $('.items').slick({
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   arrows: false,
  // });

let mybutton = document.getElementById("top1");
let mybutton1 = document.getElementById("leftmenu");
let menudrop = document.querySelector('#menu1');
let menudrop1 = document.querySelector('#menu2');
let menuclick = document.querySelector('#menu_click');
let iconclick = document.querySelectorAll('.icon_menu');
let icon0 = document.getElementById('icon0_menu');
let dropdown = document.getElementById('uldropdown');
let dropdown1 = document.getElementById('uldropdown1');
let dropdown2 = document.getElementById('uldropdown2');
let dropdown3 = document.getElementById('uldropdown3');
let dropdown4 = document.getElementById('uldropdown4');
let dropdown5 = document.getElementById('uldropdown5');
let dropdown6 = document.getElementById('uldropdown6');
let dropdown7 = document.getElementById('uldropdown7');
let menu1 = document.getElementById('icon0_menu');
function click_menu(){
  if(menudrop.style.display === "none"){
    menudrop.style.display = "block";
    menudrop1.style.display = "block";
  }
  else{
    menudrop.style.display = "none";
    menudrop1.style.display = "none";
  }
}
let count = 1;
function close_menu(){
    menudrop.style.display = "none";
    menudrop1.style.display = "none";
    dropdown.style.display="none";
    dropdown1.style.display="none";
    dropdown2.style.display="none";
    dropdown3.style.display="none";
    dropdown4.style.display="none";
    dropdown5.style.display="none";
    dropdown6.style.display="none";
    dropdown7.style.display="none";
    document.getElementById("icon0_menu").style.color="black";
    document.getElementById("icon0_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon1_menu").style.color="black";
    document.getElementById("icon1_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon2_menu").style.color="black";
    document.getElementById("icon2_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon3_menu").style.color="black";
    document.getElementById("icon3_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon4_menu").style.color="black";
    document.getElementById("icon4_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon5_menu").style.color="black";
    document.getElementById("icon5_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon6_menu").style.color="black";
    document.getElementById("icon6_menu").style.transform = "rotate(0deg)";
    document.getElementById("icon7_menu").style.color="black";
    document.getElementById("icon7_menu").style.transform = "rotate(0deg)";
}
$(document).ready(function () {
  $("#icon0_menu").click(function () {
    if(count === 1){
      document.getElementById("icon0_menu").style.color="red";
      document.getElementById("icon0_menu").style.transform = "rotate(90deg)";
      count +=1;
    }
    else{
      document.getElementById("icon0_menu").style.color="black";
      document.getElementById("icon0_menu").style.transform = "rotate(0deg)";
      count = 1;
    }
    $('#uldropdown').slideToggle();
  })
});

$(document).ready(function () {
  $("#icon1_menu").click(function () {
     if(count===1){
      document.getElementById("icon1_menu").style.color="red";
      document.getElementById("icon1_menu").style.transform = "rotate(90deg)";
      count +=1;
     }else{
      document.getElementById("icon1_menu").style.color="black";
      document.getElementById("icon1_menu").style.transform = "rotate(00deg)";
      count =1;
     }
      $('#uldropdown1').slideToggle();
  })
});
$(document).ready(function () {
  $("#icon2_menu").click(function () {
     if(count ===1){
      document.getElementById("icon2_menu").style.color="red";
      document.getElementById("icon2_menu").style.transform = "rotate(90deg)";
      count +=1;
     }
     else{
      document.getElementById("icon2_menu").style.color="black";
      document.getElementById("icon2_menu").style.transform = "rotate(0deg)";
      count =1;
     }
      $('#uldropdown2').slideToggle();
  })
});
$(document).ready(function () {
  $("#icon3_menu").click(function () {
    if(count ===1 ){
      document.getElementById("icon3_menu").style.color="red";
      document.getElementById("icon3_menu").style.transform = "rotate(90deg)";
      count +=1;
    }else{
      document.getElementById("icon3_menu").style.color="black";
      document.getElementById("icon3_menu").style.transform = "rotate(0deg)";
      count =1;
    }
    
      $('#uldropdown3').slideToggle();
  })
});
$(document).ready(function () {
  $("#icon4_menu").click(function () {
     if(count ===1){
      document.getElementById("icon4_menu").style.color="red";
      document.getElementById("icon4_menu").style.transform = "rotate(90deg)";
      count+=1;
     }
    else{
      document.getElementById("icon4_menu").style.color="black";
      document.getElementById("icon4_menu").style.transform = "rotate(0deg)";
      count =1;
    }
      $('#uldropdown4').slideToggle();
  })
});
$(document).ready(function () {
  $("#icon5_menu").click(function () {
    if(count ===1 ){
      document.getElementById("icon5_menu").style.color="red";
      document.getElementById("icon5_menu").style.transform = "rotate(90deg)";
      count +=1;
    }
     else{
      document.getElementById("icon5_menu").style.color="black";
      document.getElementById("icon5_menu").style.transform = "rotate(0deg)";
      count =1;
     }
      $('#uldropdown5').slideToggle();
  })
});
$(document).ready(function () {
  $("#icon6_menu").click(function () {
     if(count === 1){
      document.getElementById("icon6_menu").style.color="red";
      document.getElementById("icon6_menu").style.transform = "rotate(90deg)";
      count +=1;
     }
    else{
      document.getElementById("icon6_menu").style.color="black";
      document.getElementById("icon6_menu").style.transform = "rotate(0deg)";
      count =1;
    }
      $('#uldropdown6').slideToggle();
  })
});
$(document).ready(function () {
  $("#icon7_menu").click(function () {
    if(count ===1){
      document.getElementById("icon7_menu").style.color="red";
      document.getElementById("icon7_menu").style.transform = "rotate(90deg)";
      count +=1;
    }
    else{
      document.getElementById("icon7_menu").style.color="black";
      document.getElementById("icon7_menu").style.transform = "rotate(0deg)";
      count =1;
    }
      $('#uldropdown7').slideToggle();
    
  })
});

window.onscroll = function() {scrollFunction()
  , scrollMenu()
};
// window.onscroll = function() {scrollMenu()};
function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
    mybutton1.style.display = "block";
   
  } else {
    mybutton.style.display = "none";
    mybutton1.style.display = "none";
 
  }
}

function scrollMenu(){
  if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    mybutton1.style.left = "4px";
    mybutton1.style.opacity = "1"
  }
  else{
    mybutton1.style.left = "-15px";
    mybutton1.style.opacity = "0"
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const words = ["Nhập từ khóa cần tìm kiếm?"];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split("");
  var loopTyping = function() {
    if (word.length > 0) {
      let elem = document.getElementById('text_header');
      elem.setAttribute('placeholder', elem.getAttribute('placeholder') + word.shift());
    } else {
      deletingEffect();
      return false;
    };
    timer = setTimeout(loopTyping, 200);
  };
  loopTyping();
};

function deletingEffect() {
  let word = words[i].split("");
  var loopDeleting = function() {
    if (word.length > 0) {
      word.pop();
      document.getElementById('text_header').setAttribute('placeholder', word.join(""));
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect();
      return false;
    };
    timer = setTimeout(loopDeleting, 100);
  };
  loopDeleting();
};
typingEffect();

const words1 = ["Nhập từ khóa cần tìm kiếm?"];
let i1 = 0;
let timer1;
function typingEffect1() {
  let word1 = words[i].split("");
  var loopTyping1 = function() {
    if (word1.length > 0) {
      let elem1 = document.getElementById('text_header1');
      elem1.setAttribute('placeholder', elem1.getAttribute('placeholder') + word1.shift());
    } else {
      deletingEffect1();
      return false;
    };
    timer1 = setTimeout(loopTyping1, 200);
  };
  loopTyping1();
};

function deletingEffect1() {
  let word1 = words1[i].split("");
  var loopDeleting1 = function() {
    if (word1.length > 0) {
      word1.pop();
      document.getElementById('text_header1').setAttribute('placeholder', word1.join(""));
    } else {
      if (words1.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      };
      typingEffect1();
      return false;
    };
    timer1 = setTimeout(loopDeleting1, 100);
  };
  loopDeleting1();
};
typingEffect1();