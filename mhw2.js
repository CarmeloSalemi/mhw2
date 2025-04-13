const PHOTO_LIST = [
    'Battito.png',
    'TanaDelGranchio.png',
    'VolevoEssereUnDuro.png',
    'Lentamente.png',
    'Amarcord.png',
    'VieniConMe.png',
    'NextSummer.png',
    'Alibi.png',
    'RadioSakura.png'
];

function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

const albumView = document.querySelector('#album-view');
for(let i=0; i<PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
}

function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    modalView.style.top = window.scrollY + 'px';
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
    document.addEventListener('keydown', scroll);
}

function onModalClick() {
    document.body.classList.remove('no-scroll');
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
    document.removeEventListener('keydown', scroll);
}

const modalView = document.querySelector('#modal-view');
modalView.addEventListener('click', onModalClick);

function scroll(event) {
    const image = modalView.querySelector('img');
    let index;
    for(let i=0; i<PHOTO_LIST.length; i++) {
        if(image.src.includes(PHOTO_LIST[i])) {
            switch(event.key){
                case 'ArrowRight':
                    if (i === PHOTO_LIST.length - 1) {  
                        index=0;
                    }
                    else {
                        index = i + 1;
                    }
                    break;

                case 'ArrowLeft':
                    if(i === 0) {
                        index = PHOTO_LIST.length - 1;
                    }
                    else {
                        index = i - 1;
                    }
                    break;
            }
        }
    }
    image.src = PHOTO_LIST[index];
}

const images = document.querySelectorAll('#section .card img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const info = image.dataset.info;
        
        alert(info);
    });
});
