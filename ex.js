document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".nextBtn");
  const prevBtn = document.querySelector(".prevBtn");
  let counter = 0;
  const slideWidth = slides[0].clientWidth;
  let intervalId;

  nextBtn.addEventListener("click", function() {
    counter++;
    carousel();
    resetInterval();
  });

  prevBtn.addEventListener("click", function() {
    counter--;
    carousel();
    resetInterval();
  });

  function carousel() {
    if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    if (counter === slides.length ) {
      counter = 0; // 슬라이드의 마지막이면 counter를 0으로 재설정
    }
    slides.forEach(function(slide) {
      slide.style.transition = "transform 0.5s ease"
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
  function startInterval() {
    intervalId = setInterval(function() {
      counter++;
      carousel();
    }, 4000); // 3초마다 슬라이드 전환
  }

  function resetInterval() {
    clearInterval(intervalId);
    startInterval();}
  

  prevBtn.style.display = "none";
  startInterval();
});
//사이드바 
document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".item");

  items.forEach(function(item) {
    item.addEventListener("click", function() {
      this.nextElementSibling.classList.slideToggle();
    });
  });

  const listicon = document.querySelector(".listicon");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");

  listicon.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar");
  });

  closeBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
  });

  const prevBtn = document.querySelector(".prevBtn");
  const nextBtn = document.querySelector(".nextBtn");

  prevBtn.addEventListener("click", function() {
    const activeSlide = document.querySelector(".slide-img.active");
    activeSlide.classList.remove("active");
    activeSlide.previousElementSibling.classList.add("active");
  });

  nextBtn.addEventListener("click", function() {
    const activeSlide = document.querySelector(".slide-img.active");
    activeSlide.classList.remove("active");
    activeSlide.nextElementSibling.classList.add("active");
  });
});
//사진 3개
document.addEventListener("DOMContentLoaded", function() {
  const fadeImages = document.querySelectorAll(".fade-in");

  function fadeInImages() {
    const screenHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    fadeImages.forEach(function(image, index) {
      const imagePosition = image.offsetTop;

      if (imagePosition < (scrollTop + screenHeight)) {
        setTimeout(function() {
          image.classList.add("show");
        }, index * 500); // 각 이미지마다 0.5초씩 딜레이를 줌
      } else {
        image.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", fadeInImages);
});



//third 스크롤

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateElements() {
    var boxPicture = document.querySelector('#third .box_picture');
    var boxLetter = document.querySelector('#third .box_letter');
    var letterElements = document.querySelectorAll('.box_black p');

    if (isElementInViewport(boxPicture)) {
      setTimeout(function() {
        boxPicture.style.transform = 'translateY(0)';
        boxPicture.style.opacity = 1;
      }, 500); // 0.8초 딜레이
    }

    if (isElementInViewport(boxLetter)) {
      setTimeout(function() {
        boxLetter.style.transform = 'translateY(0)';
        boxLetter.style.opacity = 1;

        letterElements.forEach(function(element, index) {
          setTimeout(function() {
            element.style.opacity = 1;
          }, index * 200); // 각 글자마다 0.2초씩 딜레이를 줌
        });
      }, 500); // 0.8초 딜레이
    }
  }

  window.addEventListener('scroll', animateElements);




//팝업 
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.slider-img');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');
  }

  function startSlideShow() {
    setInterval(function() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 3000);
  }

  showImage(currentIndex);
  startSlideShow();
});
