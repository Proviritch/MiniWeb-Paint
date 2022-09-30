let height;
let body = document.querySelector('body');
let main = document.querySelector('main')

const callback = (entries) => {
    console.log(entries);
    height = entries[0].rootBounds.height;
    body.style.height = height + 'px';
    main.style.height = height + 'px';
}

const options = {
    threshold: 1
};

const vigilante = new IntersectionObserver(callback,options);
vigilante.observe(body);