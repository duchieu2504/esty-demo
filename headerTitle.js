import html from './core.js'

const init = [
    {
        text: () => {
           return {
                textAll: ['All Jewelry & Accessories', 'All Jewelry'],
                texts: ['Accessories', 'Bags & Purses', 'Necklaces', 'Rings', 'Earrings', 'Bracelets', 'Body Jewelry']
            }
        },
        titles: () => {
            return [
                {
                    title1: ['Hats & Caps', 'Hair Accessories', 'Wreaths & Tiaras', 'Headbands', 'Fascinators & Mini Hats', 'Sunglasses & Eyewear', 'Scarves & Wraps'],
                    title2: ['Belts & Suspenders','Keychains & Lanyards','Gloves & Mittens','Sun Hats','Ring','Umbrellas & Rain Accessories'],
                    titleAll: ['All Accessories']
                },
                {
                    title1: ['Backpacks', 'Handbags', 'Clutches & Evening Bags', 'Shoulder Bags', 'Diaper Bags'],
                    title2: ['Luggage & Duffel Bags', 'Phone Cases'],
                    titleAll: ['All Bags & Purses']
                },
                {
                    title1: ['Pendants', 'Chokers', 'Charm Necklaces', 'Crystal Necklaces', 'Monogram & Name Necklaces', 'Beaded Necklaces'],
                    title2: ['Chains', 'Bib Necklaces', 'Tassel Necklaces'],
                    titleAll: ['All Necklaces']
                },
                {
                    title1: ['Statement Rings', 'Bands', 'Signet Rings', 'Multi-Stone Rings', 'Solitaire Rings', 'Midi Rings'],
                    title2: ['Wedding & Engagement', 'Engagement Rings', 'Wedding Bands', 'Promise Rings', 'Bridal Sets', 'Stackable Rings'],
                    titleAll: ['All Rings']
                },
                {
                    title1: ['Dangle & Drop Earrings', 'Stud Earrings', 'Hoop Earrings', 'Chandelier Earrings', 'Ear Jackets & Climbers'],
                    title2: ['Cluster Earrings', 'Cuff & Wrap Earrings', 'Clip-On Earrings'],
                    titleAll: ['All Earrings']
                },
                {
                    title1: ['Beaded Bracelets', 'Bangles', 'Charm Bracelets', 'Woven & Braided Bracelets'],
                    title2: ['Cuff Bracelets', 'Chain & Link Bracelets'],
                    titleAll: ['All Bracelets']
                },
                {
                    title1: ['Anklets', 'Hair Jewelry', 'Nose Rings & Studs', 'Arm Bands', 'Nipple Jewelry', 'Belly Rings'],
                    title2: ['Shoulder Jewelry', 'Toe Rings', 'Lip Rings'],
                    titleAll: ['All Body Jewelry']
                }
            ]
        }
    },
    {
        text: () => {
           return {
                textAll: ['All Clothing & Shoes'],
                texts: ["Women's", "Men's", "Kids' & Baby", 'Bags & Purses']
            }
        },
        titles: () => {
            return [
                {
                    title1: ['Women Clothing', 'Dresses', 'Tops & Tees', 'Skirts', 'Jackets & Coats', 'Pants & Capris', "Shorts's", 'Swimwear'],
                    title2: ["Women's Shoes", 'Sandals'],
                    titleAll: [ "All Women's"]
                },
                {
                    title1: ["Men's Clothing", 'Shirts','Jackets & Coats','Shorts'],
                    title2: ["Men's Shoes"],
                    titleAll: ['All Men"s']
                },
                {
                    title1: ["Baby Girls' Clothing", 'Girls Clothing', 'Dresses', 'Skirts', 'Tops', 'Jackets & Coats', 'Baby Boys Clothing'],
                    title2: ['Boys Clothing', 'Tops', 'Jackets & Coats', 'Girls Shoes', 'Boys Shoes'],
                    titleAll: ['All Kids & Baby']
                },
                {
                    title1: ['Backpacks', 'Handbags', 'Clutches & Evening Bags', 'Shoulder Bags', 'Diaper Bags'],
                    title2: ['Luggage & Duffel Bags', 'Phone Cases'],
                    titleAll: ['All Bags & Purses']
                },           
            ]
        }
    },
    {
        text: () => {
           return {
                textAll: ['All Home & Living'],
                texts: ["Home", "Bath & Beauty", "Pet Supplies"]
            }
        },
        titles: () => {
            return [
                {
                    title1: ['Home Decor', 'Wall Decor', 'Decorative Pillows', 'Picture Frames & Displays', 'Candles & Holders', 'Clocks', 'Vases', 'Rugs', 'Furniture', 'Bedding'],
                    title2: ['Bathroom', 'Outdoor & Gardening', 'Storage & Organization', 'Office', 'Lighting', 'Kitchen & Dining', 'Food & Drink', 'Spirituality & Religion'],
                    titleAll: ['All Home']
                },
                {
                    title1: ['Bath Accessories', 'Makeup & Cosmetics', 'Skin Care', 'Hair Care', 'Essential Oils', 'Fragrances'],
                    title2: ['Soaps & Bath Bombs', 'Sex Toys', 'Face Masks & Coverings'],
                    titleAll: ['All Bath & Beauty ']
                },
                {
                    title1: ['Pet Collars & Leashes', 'Pet Furniture', 'Pet Clothing & Shoes', 'Pet Bedding'],
                    title2: ['Pet Carriers & Houses'],
                    titleAll: ['All Pet Supplies ']
                },          
            ]
        }
    },
    {
        text: () => {
           return {
                textAll: ['All Wedding & Party', 'All Wedding'],
                texts: ['Party Supplies', 'Invitations & Paper', 'Wedding Decorations', 'Wedding Gifts', 'Wedding Accessories', 'Wedding Clothing', 'Wedding Jewelry']
            }
        },
        titles: () => {
            return [
                {
                    title1: ['Party Decor', 'Baking & Cake Decoration'],
                    title2: [],
                    titleAll: ['All Party Supplies ']
                },
                {
                    title1: ['Invitations & Announcements', 'Wedding Invitations', 'Wedding Invitation Kits', 'Wedding Templates', 'Save The Dates', 'Greeting Cards'],
                    title2: ['Gift Wrapping', 'Holiday & Seasonal Cards', 'Stationery'],
                    titleAll: ['All Invitations & Paper ']
                },
                {
                    title1: ['Centerpieces', 'Cake Toppers', 'Serving & Dining', 'Cake Servers & Knives', 'Table Decor', 'Candles & Holders'],
                    title2: ['Baskets & Boxes', 'Ring Bearer Pillows', 'Plants'],
                    titleAll: ['All Wedding Decorations ']
                },
                {
                    title1: ['Bridesmaids Gifts', 'Wedding Favors', 'Gifts For The Couple', 'Groomsmen Gifts', 'Guest Books'],
                    title2: ['Portraits & Frames', 'Albums & Scrapbooks'],
                    titleAll: ['All Wedding Gifts']
                },
                {
                    title1: ['Something Blue', 'Bouquets & Corsages', 'Veils', 'Bags & Purses', 'Cover Ups & Scarves', 'Hair Accessories', 'Barrettes & Clips', 'Decorative Combs', 'Fascinators & Mini Hats', 'Hair Jewelry', 'Hair Pins', 'Wreaths & Tiaras'],
                    title2: ['Cummerbunds', 'Neckties', 'Umbrellas', 'Hats'],
                    titleAll: ['All Wedding Accessories']
                },
                {
                    title1: ['Dresses', 'Bridal Gowns & Separates', 'Bridesmaid Dresses', 'Flower Girl Dresses', 'Mother of the Bride Dresses'],
                    title2: ['Lingerie & Garters', 'Suits'],
                    titleAll: ['All Wedding Clothing ']
                },
                {
                    title1: ['Earrings', 'Rings', 'Engagement Rings', 'Wedding Bands', 'Bridal Sets'],
                    title2: ['Necklaces', 'Bracelets', 'Jewelry Sets'],
                    titleAll: ['All Wedding Jewelry ']
                },
            ]
        }
    },
]

function headerTitle(items = init) {
    return html `
        ${items.map(function(item, index) {
            // console.log()
            return html `
                <div class="header__product-list">
                    <div class="row">
                        <div class="col l-4">
                            <ul class="header__product-item">
                                <li class="header__product-item-textAll">
                                    ${item.text().textAll[0]}
                                    <i class="textAll-icon fas fa-arrow-right"></i>
                                </li>
                                ${item.text().texts.map(function(text) {
                                    return html `
                                        <li class="header__product-item-text">
                                            ${text}
                                            <i class="fas fa-chevron-right"></i>
                                        </li>
                                        `
                                })}
                                ${item.text().textAll[1] && html`
                                    <li class="header__product-item-textAll">
                                        ${item.text().textAll[1]}
                                        <i class="textAll-icon fas fa-arrow-right"></i>
                                    </li>`}
                            </ul>                                                           
                        </div>
                        
                        <div class="col l-8">
                            ${item.titles().map(function(title, index) {
                                return html `
                                    <div class="header__product-itemMin ${ index === 0 && 'active'}" data-set="${index}">
                                        <div class="row sm-gutter">
                                            <div class="col l-6">
                                                <ul class="header__product-pane">
                                                    ${title.title1.map(function(tit) {
                                                        return html `<li class="header__product-pane-textBold">${tit}</li>`
                                                    })}
                                                </ul>
                                            </div>
                                            <div class="col l-6">
                                                <ul class="header__product-pane">
                                                    ${title.title2.map(function(tit) {
                                                        return html `<li class="header__product-pane-textBold">${tit}</li>`
                                                    })}
                                                    <li class="header__product-item-textAll">
                                                        ${title.titleAll}
                                                        <i class="textAll-icon fas fa-arrow-right"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                `
                            })}
                        </div>
                    </div>
                </div>
                `
    })}
    `
}
// console.log(headerTitle())

export default headerTitle