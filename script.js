document.addEventListener(`DOMContentLoaded`, function () {

    window.addEventListener(`scroll`, function () {
        const scrollTopData = window.scrollY;
        console.log(scrollTopData)

        const logoSize = document.querySelector(`.h_1`)
        const logo = document.querySelector(`.logo`)
        const menuIconOne = document.querySelector(`.menu_icon1`)
        const menuIconTwo = document.querySelectorAll(`.icon2_box span`)


        if (scrollTopData >= 700) {
            logoSize.classList.add(`active`)
            logo.classList.add(`active`)
            menuIconOne.classList.add(`active`)
            menuIconTwo.forEach(icon => icon.classList.add('active'));
            menuBox.addEventListener(`click`, function (event) { 
                if (event.target == event.currentTarget) {
                    mIconOne.classList.add(`active`)
                }

            });

        } else {
            logoSize.classList.remove(`active`)
            logo.classList.remove(`active`)
            menuIconOne.classList.remove(`active`)
            menuIconTwo.forEach(icon => icon.classList.remove('active'));
            menuBox.addEventListener(`click`, function (event) { 
                if (event.target == event.currentTarget) {
                    mIconOne.classList.remove(`active`)
                }
            });

        }

        const sec3 = document.querySelector(`.sec3`);

        const sec3Offset = sec3.offsetTop;


        if (scrollTopData >= sec3Offset) {
            logo.classList.add(`color`);
            menuIconTwo.forEach(icon => icon.classList.add('color'));
        } else {
            logo.classList.remove(`color`);
            menuIconTwo.forEach(icon => icon.classList.remove('color'));

        }


    })


    const menuBox = document.querySelector(`.menu_box`)
    const menu = document.querySelector(`.menu`)
    const mIconOne = document.querySelector(`.menu_icon1`)
    const mIconTwo = document.querySelector(`.menu_icon2`)
    const menuwrap = document.querySelector(`.h_1`)

    mIconOne.addEventListener(`click`, function () {
        menuBox.classList.add(`on`);
        mIconOne.classList.add(`active`)
        menuwrap.classList.add(`on`)
    })

    menuBox.addEventListener(`click`, function (event) { 
        if (event.target == event.currentTarget) {
            menuBox.classList.remove(`on`);
            mIconOne.classList.remove(`active`)
            mIconTwo.classList.remove(`active`);
            menuwrap.classList.remove(`on`)
        }
    });

    mIconTwo.addEventListener(`click`, function () {
        menuBox.classList.add(`on`);
        mIconTwo.classList.add(`active`);
        menuwrap.classList.add(`on`);
        mIconOne.classList.add(`active`);
    })


    const muBtn = document.querySelector(`.mu_btn`)
    const hrBtn = document.querySelector('.hr_btn');
    const muImg = document.querySelector('.makeup');
    const hrImg = document.querySelector('.hair');
    const muItem = document.querySelector('.mu_item');
    const hrItem = document.querySelector('.hr_item');
    const muBtnTwo = document.querySelectorAll('.mu_btn2');
    const hrBtnTwo = document.querySelectorAll('.hr_btn2');

    for(let muBtns of muBtnTwo){
        muBtns.addEventListener(`click`,function () {
            this.classList.remove(`active`);
            const hrBtnTwo = document.querySelectorAll('.hr_btn2');
            
            for(let hrBtns of hrBtnTwo) {
                hrBtns.classList.remove('active');
                muImg.classList.remove('on');
                hrImg.classList.remove('on');
                muItem.classList.remove(`on`);
                hrItem.classList.remove(`on`);
            }
            
        });
    }

    for(let hrBtns of hrBtnTwo){
        hrBtns.addEventListener(`click`,function () {
            this.classList.add(`active`);
            const muBtnTwo = document.querySelectorAll('.mu_btn2');
            
            for(let muBtns of muBtnTwo) {
                muBtns.classList.add('active');
                muImg.classList.add('on');
                hrImg.classList.add('on');
                muItem.classList.add(`on`);
                hrItem.classList.add(`on`);
            }
            
        });
    }

    hrBtn.addEventListener('click', function () {
        const muBtnTwo = document.querySelectorAll('.mu_btn2');
        for(let muBtns of muBtnTwo){
            const hrBtnTwo = document.querySelectorAll('.hr_btn2');
                
            for(let hrBtns of hrBtnTwo) {
                muBtns.classList.remove('active');
                hrBtns.classList.remove('active');
                muImg.classList.remove('on');
                hrImg.classList.remove('on');
                muItem.classList.remove(`on`);
                hrItem.classList.remove(`on`);
            }
    
        }
    });

    muBtn.addEventListener('click', function () {
        const muBtnTwo = document.querySelectorAll('.mu_btn2');
        for(let muBtns of muBtnTwo){
            const hrBtnTwo = document.querySelectorAll('.hr_btn2');
            for(let hrBtns of hrBtnTwo) {
                hrBtns.classList.add('active');
                muImg.classList.add('on');
                hrImg.classList.add('on');
                muBtns.classList.add('active');
                muItem.classList.add(`on`);
                hrItem.classList.add(`on`);
            }
    
        }
    });



});
