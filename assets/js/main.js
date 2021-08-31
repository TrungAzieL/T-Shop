const isMoblet = window.matchMedia('(max-width: 1023px)');
const isTablet = window.matchMedia('(min-width: 740px) and (max-width: 1023px)');
const isMobile = window.matchMedia('(max-width: 739px)');

// Product liked check
const productsLiked = document.querySelectorAll('.home-product-item__like');
for (let value of productsLiked) {
    value.onclick = function(e) {
        e.preventDefault();
        value.classList.toggle('home-product-item__like--liked')
    }
}

// PC category actived check
const PCcategoryList = document.querySelectorAll('.category-item')
for (let i in PCcategoryList) {
    PCcategoryList[i].onclick = function(e) {
        PCcategoryList[i].classList.add('category-item--active')
        for(let j in PCcategoryList) {
            if (i != j)
                PCcategoryList[j].classList.remove('category-item--active')
        }
    }
}

// Moblet sort actived check
const headerSortItems = document.querySelectorAll('.header__sort-item')
for (let i in headerSortItems) {
    headerSortItems[i].onclick = function(e) {
        e.preventDefault();
        headerSortItems[i].classList.add('header__sort-item--active')
        for(let j in headerSortItems) {
            if (i != j)
                headerSortItems[j].classList.remove('header__sort-item--active')
        }
    }
}

// PC home filter active check
const homeFilterBtn = document.querySelectorAll('.home-filter__btn.btn');
for (let i in homeFilterBtn) {
    homeFilterBtn[i].onclick = function(e) {
        homeFilterBtn[i].classList.add('btn--primary')
        for(let j in homeFilterBtn) {
            if (i != j)
                homeFilterBtn[j].classList.remove('btn--primary')
        }
    }
}

// Search history
const searchBtn = document.querySelector('.header__search-input');
const searchHistory = document.querySelector('.header__search-history')
searchHistory.onmousedown = function(e) {
    e.preventDefault();
}

// Back to header btn 
const backToHeaderBtn = document.querySelector('.back-to-header__btn');
if (isMoblet.matches) {
    backToHeaderBtn.ontouchstart = function(e) {
        e.target.style.fontWeight = 1000;
        e.target.style.fontSize = '33px';
        e.target.classList.toggle('ti-arrow-circle-up')
    }
} else {
    backToHeaderBtn.onmouseover = function(e) {
        e.target.style.fontWeight = 1000;
        e.target.style.fontSize = '33px';
        e.target.classList.toggle('ti-arrow-circle-up')
    }
}

if (isMoblet.matches) {
    backToHeaderBtn.ontouchend = function(e) {
        setTimeout(function() {
            e.target.style.fontSize = '35px';
            e.target.style.fontWeight = 600;
            e.target.classList.toggle('ti-arrow-circle-up')
        }, 100);
    }
} else  {
    backToHeaderBtn.onmouseout = function(e) {
        e.target.style.fontSize = '35px';
        e.target.style.fontWeight = 600;
        e.target.classList.toggle('ti-arrow-circle-up')
    }
}

// Hide back to header btn 
function hideBackToHeaderBtn() {
    backToHeaderBtn.classList.add('hide-on-mobile-tablet')
};

// Show up back to header btn 
function showUpBackToHeaderBtn() {
    backToHeaderBtn.classList.remove('hide-on-mobile-tablet')
};

// Modal auth form
const modalAuthForm = document.querySelector('.modal__auth-form')

// Close register modal
const registerCheck = document.querySelector('#register-check')
function offRegisterModal() {
    registerCheck.checked = false;
};

// Close login modal
const loginCheck = document.querySelector('#login-check')
function offLoginModal() {
    loginCheck.checked = false;
};

// Close all modal
function closeAllModal() {
    offRegisterModal();
    offLoginModal();
}

// Close box when clicl on transparent modal
const transparentModal = document.querySelector('.transparent-modal')
transparentModal.onclick = function(e) {
    e.preventDefault();
}