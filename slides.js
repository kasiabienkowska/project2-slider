
const image = document.querySelector(".carousel_item img");

const prevBtn = document.querySelector("#carousel_button--prev");
const nextBtn = document.querySelector("#carousel_button--next");


let counterForSecondSlider = 0;
let counter = 0;

const photosArray = ["1", "2", "3", "4", "5"];

function setImageSrc() {
  image.setAttribute("src", `./images/${photosArray[counter]}.jpg`);
}



function prevOrNextSlide(eventName) {
  if (eventName === "carousel_button--next" || !eventName) {
    counter++;
    setImageSrc();
  } else if (eventName === "carousel_button--prev") {
    debugger;
    counter--;
    setImageSrc();
  }
}

function changePhotoBySetAttr(event) {
  let eventName;

  if (event) {
    eventName = event.target.id;
  }

  if (counter >= photosArray.length - 1 && eventName !== "carousel_button--prev") {
    counter = 0;
    setImageSrc();

  } else if (counter === 0 && eventName === "carousel_button--prev") {
    counter = photosArray.length - 1;
    setImageSrc();
  } else {
    prevOrNextSlide(eventName);
  }
}


nextBtn.addEventListener("click", changePhotoBySetAttr);
prevBtn.addEventListener("click", changePhotoBySetAttr);

