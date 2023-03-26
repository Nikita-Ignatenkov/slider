let images = [{
  url: './img/1.jpg',
  city: 'Rostov-on-Don <br>LCD admiral',
  apartmentArea: '81 m2',
  repairTime: '3.5 months',
  repairCost: 'Upon request',
  tab: 'Rostov-on-Don, Admiral'
}, {
  url: './img/2.jpg',
  city: 'Sochi <br>Thieves',
  apartmentArea: '105 m2',
  repairTime: '4 months',
  repairCost: 'Upon request',
  tab: 'Sochi Thieves'
}, {
  url: './img/3.jpg',
  city: 'Rostov-on-Don <br>Patriotic',
  apartmentArea: '93 m2',
  repairTime: '3 months',
  repairCost: 'Upon request',
  tab: 'Rostov-on-Don Patriotic'
}]

function initSlider() {

  let contentImg = document.querySelector(".content__img");
  let sliderArrows = document.querySelector(".slider__arrows");
  let sliderDots = document.querySelector(".slider__dots")
  let sliderTab = document.querySelector(".slider__tab");
  let sliderCity = document.querySelector('.city')
  let sliderApartment = document.querySelector('.apartment')
  let sliderRepair = document.querySelector('.repair')
  let sliderCost = document.querySelector('.cost')

  initImages();
  initArrows();
  initDots();
  initTab();
  initText();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      contentImg.innerHTML += imageDiv;
    });
  };

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
      arrow.addEventListener("click", function () {
        let curNumber = +contentImg.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber)
      });
    });
  };

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider__dots-item n${index} ${index === 0 ? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  };

  function initTab() {
    images.forEach((image, index) => {
      let tab = `<a class="tab__text n${index} ${index === 0 ? 'active' : ''}" href="#" data-index='${index}'>${image.tab}</a>`
      sliderTab.innerHTML += tab
    })
    sliderTab.querySelectorAll('.tab__text').forEach(tab => {
      tab.addEventListener('click', function (event) {
        event.preventDefault()
        moveSlider(this.dataset.index)
      })
    })
  };

  function initText() {
    images.forEach((elem, index) => {
      let elementCity = `<p class="txt n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.city}</p>`
      let elementApartment = `<p class="txt  n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.apartmentArea}</p>`
      let elementRepair = `<p class="txt n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.repairTime}</p>`
      let elementCost = `<p class="txt n${index} ${index === 0 ? 'active' : ''}" data-index='${index}'>${elem.repairCost}</p>`

      sliderCity.innerHTML += elementCity
      sliderApartment.innerHTML += elementApartment
      sliderRepair.innerHTML += elementRepair
      sliderCost.innerHTML += elementCost
    })
  }

  function moveSlider(num) {
    contentImg.querySelector(".active").classList.remove("active");
    contentImg.querySelector(".n" + num).classList.add("active");
    
    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");
    
    sliderTab.querySelector(".active").classList.remove("active");
    sliderTab.querySelector(".n" + num).classList.add("active");

    sliderCity.querySelector('.active').classList.remove('active')
    sliderCity.querySelector('.n' + num).classList.add('active')

    sliderApartment.querySelector('.active').classList.remove('active')
    sliderApartment.querySelector('.n' + num).classList.add('active')

    sliderRepair.querySelector('.active').classList.remove('active')
    sliderRepair.querySelector('.n' + num).classList.add('active')

    sliderCost.querySelector('.active').classList.remove('active')
    sliderCost.querySelector('.n' + num).classList.add('active')
  }
}

document.addEventListener("DOMContentLoaded", initSlider);