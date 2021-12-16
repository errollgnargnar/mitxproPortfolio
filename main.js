function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -50;

    if (elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}

function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach((section) => {
        if (isVisible(section)) {
            section.style.opacity = 1;
        }
        if (isVisible(section) === false) {
            section.style.opacity = 0;
        }
    });
}

document.addEventListener('scroll', throttle(scanDocument, 125));
document.addEventListener('load', scanDocument());

function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

var ball = document.querySelector(".ball");
document.onmousemove = (e) => {
    var x = (e.clientX * 100) / window.innerWidth + "%";
    var y = (e.clientY * 100) / window.innerHeight + "%";
    ball.style.left = x;
    ball.style.top = y;
    ball.transform = "translate(-" + x + ",-" + y + ")";
};

// let quotes;
// let quote;
// fetch('quotes.json')
//   .then(response => response.json())
//   .then(data => {
//       quotes = data;
//       console.log(quotes);
//       return quotes
//   })
//   .then(quotes => {

//       var toastTrigger = document.getElementById('liveToastBtn')
//       var toastLiveExample = document.getElementById('liveToast')

//         toastTrigger.addEventListener('click', function () {
//             let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
//             console.log(quotes[randomQuoteIndex].quote);
//             quote = quotes[randomQuoteIndex].quote;
//           var toast = new bootstrap.Toast(toastLiveExample)
//           document.querySelector('.toast-body').innerHTML = quote;
//           toast.show()
//         })
//       toastTrigger.click();   
//   })


