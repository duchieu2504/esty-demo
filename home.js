import headerTitle from './headerTitle.js';

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const main = (function () {
    const $navbars = $$('.header__navbar-item')
    const $navbarlist = $('.header__navbar-list')
    
    const $navbarActive = $('.header__navbar-item.active')

    
    const $price = $('.content__price')
    const $priceHeading = $('.content__price-heading')
    const $priceLine = $('.content__price-line')
    const $priceList = $('.content__price-list')
    const line = $('.header__navbar-list .line')
    
    const $sort = $('.content-filter__sort')
    const $sortHeading = $('.content__sort-heading')
    const $sortList = $('.modal-list')
    const $$sortItem = $$('.modal-item')
    
    
    const $addressEmail = $('.address-email')
    const $addressEmailHeading = $('.footer__address-email-heading')
    const $emailBackgroud = $('.footer__address-email-background')
    
    const $downloadApp = $('.contact-info__down-textFrame')
    const $downloadLine = $('.contact-info__down-line')
    const infoProducts = [
        {
            image: "https://i.etsystatic.com/5117032/c/1247/996/712/364/il/5f8ee7/2763232240/il_340x270.2763232240_mehy.jpg",
            name: "Funny gift ideas for coworkers — Note pad — Funny meme gift — Best Selling Items Esty.com — Office gag gifts for friends",
            info: "boygirlparty",
            numberSold: "15,987",
            priceOld: "8.00",
            priceNew: "9.80",
            numberSale: "50",
            isFreeShip: "Yes",
        },
        {
            image: "https://i.etsystatic.com/28372412/d/il/b65504/3272804934/il_340x270.3272804934_1hfu.jpg?version=0",
            name: "Angelica",
            info: "Ad by ArtemPavlyukov",
            numberSold: "",
            priceOld: "112.88",
            priceNew: "95.95",
            numberSale: "15",
            isFreeShip: "Yes",
        },
        {
            image: "https://i.etsystatic.com/25913094/c/2250/1788/0/576/il/a420a0/3149890931/il_340x270.3149890931_83pf.jpg",
            name: "LIVRAISON EXPRESS - Harry Potter Marauder's Card, Hogwarts Express Train Ticket and Magicobus Bus Ticket",
            info: "boygirlparty",
            numberSold: "15,987",
            priceOld: "8.00",
            priceNew: "9.80",
            numberSale: "50",
            isFreeShip: "",
        },

    ]

    const listProductsName = [
        {
            textAll: ['All Jewelry & Accessories', 'All Jewelry'],
            texts: ['Accessories', 'Bags & Purses', 'Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Body Jewelry']
        }
    ]

    return {
        render() {
            const htmlInfo = infoProducts.map(function(infoProduct) {
                if(infoProduct.isFreeShip !== "") {
                    var freeShip = `<div class="home-product__footer">
                                        <p>FREE shipping</p>
                                    </div>`
                } else {
                    var freeShip = ''
                }

                return `<div class="col l-2-4 marginTop">
                            <a href="" class="home-product-link">
                                <div class="home-product-img" style="background-image: url('${infoProduct.image}');">
                                
                                </div>
                                <h4 class="home-product-name">
                                ${infoProduct.name}
                                </h4>
                                <h5 class="home-product-heading">
                                ${infoProduct.info}
                                </h5>
                                <div class="home-product-action">
                                    <div class="home-product-action__rating">
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                        <i class="home-product-item__rating-icon fas fa-star"></i>
                                    </div>
                                    <div class="home-product-action__numbers">${infoProduct.numberSold}</div>
                                </div>
                                <div class="home-product__price">
                                    <span class="home-product__price-new">US$${infoProduct.priceNew}</span>
                                    <span class="home-product__price-old">US$${infoProduct.priceOld}</span>
                                    <span class="home-product__price-sale">(${infoProduct.numberSale}% off)</span>
                                </div>
                                <div class="home-product-like">
                                <i class="product-like-icon-no far fa-heart"></i>
                                <i class="product-like-icon fas fa-heart"></i>
                                </div>
                                ${freeShip}
                            </a>
                        </div>`
            }).join("")
            $('.home-product .productList').innerHTML = htmlInfo;

            
            this.productLiked();

            ////////////////////////////////////////////////////////////////

            $('.header__product-name').innerHTML = headerTitle()

        },
        //navbar item
        navbars() {
            $('.header__navbar').addEventListener('mouseenter', (e) => { 
                $navbars.forEach((navbar, index) => {
                    const $$productList = $$('.header__product-list')
                    const productList = $$productList[index]
                    navbar.addEventListener('mouseenter', () => {
                        line.style.left = navbar.offsetLeft + "px";
                        line.style.width = navbar.offsetWidth + "px";
                        line.style.height = '2px';
                        line.style.transform = 'scaleX(1)';
                        
                        $('.header__navbar-item.active').classList.remove('active')
                        navbar.classList.add('active');
                        
                        setTimeout(() => {
                            productList.classList.add('active');
                        }, 300)
                        setTimeout(() => {
                            const productListActive = $('.header__product-list.active')
                            if(productListActive) {
                                productListActive.classList.remove('active')
                            }
                        }, 299)
                    })
                })
                const headerProductItem = $$('.header__product-item-text')
                const productItemMins = $$('.header__product-itemMin')
                if(headerProductItem) {
                    headerProductItem.forEach((item, index) => {
                        const productItemMin = productItemMins[index]
                        item.addEventListener('mouseenter', () => {
                            const x = $('.header__product-itemMin.active')
                            if(x) {
                                $('.header__product-itemMin.active').classList.remove('active')
                            }
                            productItemMin.classList.add('active')
                        })
                    })
                }
            })
            $('.header__navbar').addEventListener('mouseleave', () => {
                line.style.left = $('.header__navbar-item.active').offsetLeft + "px";
                line.style.width = $('.header__navbar-item.active').offsetWidth + "px";
                line.style.transitionDelay = '300ms';
                line.style.height = '2px';
                line.style.transform= 'scaleX(0)';
                const $$productList = $$('.header__product-list')
                setTimeout(() => {
                    for( var $productList of $$productList) {
                        if($productList.classList.contains('active')) {
                            $productList.classList.remove('active');
                        }
                    }
                }, 300)

                setTimeout(() => {
                    line.style.height = null
                    line.style.left = null;
                    line.style.width = null;
                    line.style.transform= null;
                    line.style.transitionDelay = null;
                }, 500)
            })
            $('.header__product-name').addEventListener('mouseleave', () => {
                const productItemMin = $$('.header__product-list .header__product-itemMin')
                productItemMin.forEach(function(item) {
                    if(item.getAttributeNode("data-set").value === '0'){
                        item.classList.add('active')
                    } else {
                        item.classList.remove('active')
                    }
                })
            })
        },
        
        //textAll
        textAll() {
            const textAll = $$('.header__product-item-textAll')
            
            if(textAll) {
                textAll.forEach((item, index) => {
                    const textAllIcons = $$('.header__product-item-textAll .textAll-icon')
                    const textAllIcon = textAllIcons[index]
    
                    item.addEventListener('mouseenter', () => {
                        textAllIcon.classList.add('active');
                    })
                    item.addEventListener('mouseleave', () => {
                        textAllIcon.classList.remove('active');
    
                    })
                })
            }
        },
        
        //price selectors
        price() {
            $priceHeading.addEventListener('mouseenter', () => {
                $priceLine.style.transform = 'scale(1.04)';
                $priceLine.style.borderWidth = '3px';
            });
            $priceHeading.addEventListener('mouseleave', () => {
                $priceLine.style.transform = 'scale(1)';
                $priceLine.style.borderWidth = '2px';
            })
            $priceHeading.onclick = () => {
                $priceList.style.transform = 'scale(1) scaleY(1) perspective(1px)';
                $priceList.style.opacity = '1';
                $priceList.style.transition = 'opacity ease-out 0.18s,transform cubic-bezier(0.175, 0.885, 0.4, 1.1) 0.18s';
            }
        },
        //Click sort
        sort() {
            $sortHeading.onclick = () => {
                $sortHeading.style.backgroundColor = '#e5e5e5'
                $sortHeading.style.borderRadius = '24px';
                setTimeout(() => {
                    $sortList.style.opacity = '1';
                    $sortList.style.transform = 'scaleX(1) scaleY(1) perspective(1px)';
                    $sortList.style.transition = 'opacity ease-out 0.18s,transform cubic-bezier(0.175, 0.885, 0.4, 1.1) 0.18s';
                    $sortList.style.willChange = 'transform, opacity'
                    $sortHeading.style.backgroundColor = 'transparent';
                    $sortHeading.style.borderRadius = '24px';
                },50)
            }
        },

        // Events liked
        productLiked() {
            const $$productLiked = $$('.home-product-like')
            $$productLiked.forEach(function(item) {
                item.onclick = function (e) {
                    e.preventDefault()
                    const productLike = item.classList.contains('home-product-like-liked')
                    if(!productLike) {
                        this.classList.add('home-product-like-liked')
                    } else {
                        this.classList.remove('home-product-like-liked')
                    }
                }
            })
        },

        //Email hover
        handleEmailClick() {
            $addressEmail.onclick = function (e) {
                $addressEmailHeading.style.color ='#fff';
                $emailBackgroud.style.transform = 'scale(1)';
                $emailBackgroud.style.opacity = '1';
            }
        },
        handleDownHover() {
            $downloadApp.addEventListener('mouseenter', () => {
                $downloadLine.style.transform = 'scale(1.02)';
                $downloadLine.style.borderWidth = '3px';
            });
            $downloadApp.addEventListener('mouseleave', () => {
                $downloadLine.style.transform = 'scale(1)';
                $downloadLine.style.borderWidth = '2px';
            })
        },
        // CLick outside
        clickOutside() {
            document.addEventListener('click', function (e) {
                // console.log(e.target)
                var isCheckSort = $sort.contains(e.target);
                var isCheckPrice = $price.contains(e.target)
                var isCheckEmail = $('.footer__address-email').contains(e.target)
                if (!isCheckSort) {
                     $sortList.style.opacity = '0';
                     $sortList.style.transform = 'scaleX(0.5) scaleY(0.2) perspective(1px)';
                     setTimeout(() => {
                         $sortList.style.transform = null
                    },180)
                }
                if (!isCheckPrice) {
                 $priceList.style.opacity = '0';
                 $priceList.style.transform = 'scaleX(0.5) scaleY(0.4) perspective(1px)';
                 setTimeout(() => {
                     $priceList.style.transform = null
                },180)
                if(!isCheckEmail) {
                    $addressEmailHeading.style.color ='var(--black-color)';
                    $emailBackgroud.style.transform = 'scale(0) perspective(1px)';
                    $emailBackgroud.style.opacity = '0';
                }
            }
         
            })
        },
        start() {
            this.render();
            this.navbars();
            this.textAll()
            this.price();
            this.sort();
            this.handleEmailClick();
            this.handleDownHover();
            this.clickOutside();
        }
    }
})()
main.start()
