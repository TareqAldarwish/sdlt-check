window.addEventListener('scroll', function () {
    let header = document.getElementById('navigation');
    let nav = document.querySelector('nav.left'); // Select the nav element inside the header
    let offset = nav.offsetTop;

    if (window.scrollY > offset) {
        header.classList.add('sticky-nav');
    } else {
        header.classList.remove('sticky-nav');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let observerOptions = {
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.owl-on-tree').classList.add('visible');

                let serviceImages = entry.target.querySelectorAll('.service img');
                serviceImages.forEach((img, index) => {
                    img.style.transitionDelay = `${index * 200}ms`;
                    img.classList.add('visible');
                });
                let newsImages = entry.target.querySelectorAll('.news-post');
                console.log(newsImages)
                newsImages.forEach((img, index) => {
                    img.style.transitionDelay = `${index * 200}ms`;
                    img.classList.add('visible');
                });
            } else {
                entry.target.querySelector('.owl-on-tree').classList.remove('visible');
                // let serviceImages = entry.target.querySelectorAll('.service img');
                // serviceImages.forEach((img) => {
                //     img.classList.remove('visible');
                //     img.style.transitionDelay = '';
                // });
                // let newsImages = entry.target.querySelectorAll('.news-post img');
                // newsImages.forEach((img) => {
                //     img.classList.remove('visible');
                //     img.style.transitionDelay = '';
                // });
            }
        });
    }, observerOptions);

    let section = document.querySelector('.section-2');
    observer.observe(section);
});
document.addEventListener("DOMContentLoaded", function () {
    let observerOptions = {
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let newsImages = entry.target.querySelectorAll('.news-post img');
                console.log(newsImages)
                newsImages.forEach((img, index) => {
                    img.style.transitionDelay = `${index * 200}ms`;
                    img.classList.add('visible');
                });
            }
            // else {
            //     let newsImages = entry.target.querySelectorAll('.news-post img');
            //     newsImages.forEach((img) => {
            //         img.classList.remove('visible');
            //         img.style.transitionDelay = '';
            //     });
            // }
        });
    }, observerOptions);

    let section = document.querySelector('.section-3');
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    let observerOptions = {
        threshold: .9
    };

    let observer = new IntersectionObserver(function (entries) {
        console.log('asdsa')
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.roar').classList.add('visible');
            } else {
                entry.target.querySelector('.roar').classList.remove('visible');
            }
        });
    }, observerOptions);

    let section = document.querySelector('.footer-bottom');
    observer.observe(section);
});
