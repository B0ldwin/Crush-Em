// script.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slideshow img');
const totalSlides = slides.length;

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  if (n < 0) {
    currentSlide = totalSlides - 1;
  } else if (n >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }
  slides[currentSlide].style.display = 'block';
}

function purchasePackage(packageType) {
  // Logic for purchasing the selected package
  // You can implement further actions here, like redirecting to a payment gateway or form
  console.log(`Package ${packageType} purchased!`);
}

// Initialize slideshow
showSlide(currentSlide);

// Automatic slideshow
setInterval(() => {
  currentSlide++;
  showSlide(currentSlide);
}, 3000); // Change slide every 3 seconds

// script.js

// script.js

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If you need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.784172, lng: -122.401558},
    zoom: 15
  });
}

function calculataeMembershipCost(packageType, duration) {
	let cost = 0;
	
	// Define costs for different package types and durations
	cost costs = {
		basic: {
			monthly: 30,
			quarterly: 80,
			annual: 300
		},
		pro: {
			monthly: 40,
			quarterly: 100,
			annual: 350
		}
		hardcore: {
			monthly: 50,
			quarterly: 150,
			annual: 400
		}
	};
	
	// Check if the provided package type and duration exists in the costs object
if (costs[packageType] && costs[packageType][duration]) {
	cost = costs[packageType][duration];
} 	else {
	// Handle cases where the package type or duration is not found
	console.error('Invalid package type or duration.');
}

return cost;
}	

// Example usage:
const packageType = 'premium';
const duration = 'monthly';
const totalCost = calculataeMembershipCost(packageType, duration);
console.log('The total cost for the ${packageType} membership (${duration}) is $${totalCost}.');