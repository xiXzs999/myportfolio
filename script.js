// slider.js

class ImageSlider {

    constructor() {

        this.track = document.querySelector(".slider-track");
        this.slides = document.querySelectorAll(".slide");
        this.prevBtn = document.querySelector(".prev");
        this.nextBtn = document.querySelector(".next");
        this.dotsContainer = document.querySelector(".slider-dots");

        this.currentIndex = 0;
        this.totalSlides = this.slides.length;

        this.createDots();
        this.updateSlider();
        this.addEventListeners();

    }

    createDots() {

        this.dots = [];

        for (let i = 0; i < this.totalSlides; i++) {

            const dot = document.createElement("button");

            if (i === 0) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                this.currentIndex = i;
                this.updateSlider();
            });

            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);

        }

    }

    updateDots() {

        this.dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        this.dots[this.currentIndex].classList.add("active");

    }

    updateSlider() {

        const slideWidth = this.slides[0].clientWidth;

        this.track.style.transform =
            `translateX(-${this.currentIndex * slideWidth}px)`;

        this.updateDots();

    }

    nextSlide() {

        this.currentIndex++;

        if (this.currentIndex >= this.totalSlides) {
            this.currentIndex = 0;
        }

        this.updateSlider();

    }

    previousSlide() {

        this.currentIndex--;

        if (this.currentIndex < 0) {
            this.currentIndex = this.totalSlides - 1;
        }

        this.updateSlider();

    }

    addEventListeners() {

        this.nextBtn.addEventListener("click", () => {
            this.nextSlide();
        });

        this.prevBtn.addEventListener("click", () => {
            this.previousSlide();
        });

        window.addEventListener("resize", () => {
            this.updateSlider();
        });

    }

}

document.addEventListener("DOMContentLoaded", () => {

    new ImageSlider();

});