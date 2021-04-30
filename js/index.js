const options = {
    strings: ['Increase Loyal Customers', 'Widen your profit margins.', 'Use Strategic Marketing.'],
    typeSpeed: 40,
    backSpeed: 50,
    smartBackspace: true,
    loop: true,
  };

  const typed = new Typed('#type-animation', options);


  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  isMobile ? document.getElementById('mobile-img').src = './static/assets/landing-page-mobile.svg' : '';
