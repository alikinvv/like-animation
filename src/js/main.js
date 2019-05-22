let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let mainHeart = anime();
let secondHeart = anime();

let path1 = anime.path('.line1');
let path2 = anime.path('.line2');
let path3 = anime.path('.line3');
let path4 = anime.path('.line4');
let path5 = anime.path('.line5');
let path6 = anime.path('.line6');
let path7 = anime.path('.line7');

let floatingHearts = () => {
    $('.heart').show();

    anime({ targets: '.heart1', translateX: path1('x'), translateY: path1('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
    anime({ targets: '.heart2', translateX: path2('x'), translateY: path2('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
    anime({ targets: '.heart3', translateX: path3('x'), translateY: path3('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
    anime({ targets: '.heart4', translateX: path4('x'), translateY: path4('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
    anime({ targets: '.heart5', translateX: path5('x'), translateY: path5('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
    anime({ targets: '.heart6', translateX: path6('x'), translateY: path6('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
    anime({ targets: '.heart7', translateX: path7('x'), translateY: path7('y'), scale: { value: [1, 0], delay: getRandomInt(400, 600), duration: getRandomInt(1000, 2000) }, easing: 'easeInOutCubic', duration: 2000 });
};

$('body').on('click', '.like', (e) => {
    let $this = $(e.currentTarget);

    if ($this.hasClass('active')) {
        secondHeart.pause();
        mainHeart.pause();
        $this.toggleClass('active');

        mainHeart = anime({ targets: '.like .main', scale: 1, duration: 1, delay: 0 });
        anime({ targets: '.like .second', scale: 0, easing: 'linear', duration: 150 });
    } else {
        secondHeart.pause();
        mainHeart.pause();
        $this.toggleClass('active');

        anime({
            targets: '.like .second',
            scale: 0,
            easeing: 'linear',
            duration: 0,
            complete: () => {
                secondHeart = anime({ targets: '.like .second', scale: 1 });
                mainHeart = anime({ targets: '.like .main', scale: 0, duration: 1, delay: 300 });
            }
        });

        floatingHearts();
    }
});