function makeActive(element) {
    // Remove 'active' class from all list items
    var lis = document.querySelectorAll('header ul li');
    lis.forEach(function(li) {
        li.querySelector('a').classList.remove('active');
    });

    // Add 'active' class to the clicked list item
    element.classList.add('active');
}

const body = document.querySelector('body');
    const toTopBtn = document.getElementById('toTopBtn');
    const mouse = document.getElementById('mouse');
    const initialTheme = 'light';
    const card = document.getElementById('card-front');
    var count = 0;

    const setTheme = (theme) => {
        localStorage.setItem('durmexTheme', theme);
        body.setAttribute('data-theme', theme);
    }
    const toggleTheme = () => {
        const activeTheme = localStorage.getItem('durmexTheme');
        activeTheme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const setThemeOnInit = () => {
        const savedTheme = localStorage.getItem('durmexTheme');
        savedTheme ? body.setAttribute('data-theme', savedTheme) : setTheme(initialTheme);
    }

    const scrollFunction = function () {
        if (document.scrollingElement.scrollTop > 100) {
            toTopBtn.style.opacity = "1";
        } else {
            toTopBtn.style.opacity = "0";
        }
    }

    const toTopFunction = function () {
        document.scrollingElement.scrollTop = 0;
    }

    setThemeOnInit();

    const projects = [
        {
            name: "Wetter App",
            desc: "Wetter App mit Wetter-API",
            info: "Angular, JS, HTML, CSS",
            deployt: "Deployt",
            projectLink: "#",
            image_one: "https://freepngimg.com/thumb/categories/2275.png",
            image_one_class: "img-1",
            image_two: "https://www.seekpng.com/png/full/2-22588_cloud-background-free-download-sky-background-transparent-png.png",
            image_two_class: "img-2",
            image_three: "https://www.pngarts.com/files/7/Thunder-PNG-Free-Download.png",
            image_three_class: "img-3",
            image_four: "https://purepng.com/public/uploads/large/purepng.com-cloudnaturecloudsmoke-9615246757368kjiz.png",
            image_four_class: "img-6",
        },
        {
            name: "Wetter App",
            desc: "Wetter App mit Wetter-API",
            info: "Angular, JS, HTML, CSS",
            deployt: "Deployt",
            projectLink: "#",
            image_one: "https://assets.codepen.io/1462889/grass.png",
            image_one_class: "img-2",
            image_two: "https://assets.codepen.io/1462889/camp.png",
            image_two_class: "img-4",
            image_three: "https://assets.codepen.io/1462889/Ivy.png",
            image_three_class: "img-5",
            image_four: "https://assets.codepen.io/1462889/IvyRock.png",
            image_four_class: "img-7",
        }
    ];

    body.style.overflowY = 'hidden';
    body.onscroll = function () {
        scrollFunction();
    };
    window.onload = function () {
        let preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.display = 'none';
            body.style.overflowY = 'scroll';
        }, 800);
    };

    (function () {
        var method;
        var noop = function () { };
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }
    }());


    