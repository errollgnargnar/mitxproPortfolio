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


