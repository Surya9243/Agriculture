let selectMenu = document.querySelector('.selectMenu')
let menu = document.querySelector('.menu')
menu.addEventListener('click', () => {
    selectMenu.classList.toggle('abc')
})

let mainSlider = ["/Nav/Image/sonalika.jpeg", "/Nav/Image/Johndeere.webp", "/Nav/Image/Mahindraarjun.webp", "/Nav/Image/KubotaTractor.jpg", "/Nav/Image/MessyTractor.jpg", "/Nav/Image/PreetTractor.jpg", "/Nav/Image/SwarajTractor.jpg"]
let sliderImage = document.querySelector('.sliderImage')
let i = 0
setInterval(() => {
    if (i == mainSlider.length - 1) {
        i = 0
    }
    i++
    sliderImage.src = mainSlider[i]
}, 2000);

let itemicone = ["/Nav/Image/tractorIcon.png", "/Nav/Image/combainIcone.jpeg", "/Nav/Image/cultivaterIcone.jpeg", "/Nav/Image/eries.jpg", "/Nav/Image/TrallyIcone.jpeg", "/Nav/Image/seedsIcon.jpeg"]

let itemNames = ['Tractor', 'Combine', 'Cultivater', 'Accessories', 'Trolley', 'Seeds', 'All']
let itemArrow = "https://img.icons8.com/ios-filled/50/FFFFFF/right--v1.png";


for (let i = 0; i < itemNames.length; i++) {
    selectMenu.innerHTML += `
    <div class="itemNav">
    <img class="itemIcon" src="${itemicone[i]}" alt="">
    <p class="itemName" >${itemNames[i]}</p>
    <img class="itemNext" src="${itemArrow}" alt="arrow" /> 
    </div>`
}


let itemNav = document.querySelectorAll('.itemNav')
let itemName = document.querySelectorAll('.itemName')



const tractors = [
    { img: "/Nav/Image/Tractor/ACE,di3045,50hp.jpeg", price: '700', title: 'di3045/50HP', Names: "Tractor", company: 'ACE', id: "21" },
    { img: "/Nav/Image/Tractor/Audaz,12ED,260HP.jpg", price: '1500', title: '12Ed/260HP', Names: "Tractor", company: 'Audaz', id: "22" },
    { img: "/Nav/Image/Tractor/DI,745iii,50hp.jpeg", price: '780', title: 'DI,745iii/50HP', Names: "Tractor", company: 'Mehndra', id: "23" },
    { img: "/Nav/Image/Tractor/Belarus,80.1,55hp.jpg", price: '810', title: '80.1Eo/55HP', Names: "Tractor", company: 'Belarus', id: "24" },
    { img: "/Nav/Image/Tractor/Eicher,380,40hp.jpg", price: '680', title: '380/40HP', Names: "Tractor", company: 'Eicher', id: "25" },
    { img: "/Nav/Image/Tractor/Ford,8600,75hp.jpg", price: '870', title: '8600/75HP', Names: "Tractor", company: 'Ford', id: "26" },
    { img: "/Nav/Image/Tractor/Framtrac,60,50hp.jpg", price: '670', title: '60/50HP', Names: "Tractor", company: 'Framtrac', id: "27" },
    { img: "/Nav/Image/Tractor/hmt,5911,60hp.jpg", price: '870', title: '5911/60HP', Names: "Tractor", company: 'hmt', id: "28" },
    { img: "/Nav/Image/Tractor/JD-5060-500HP.jpg", price: '2300', title: '5060/500HP', Names: "Tractor", company: 'John-Deer', id: "29" },
    { img: "/Nav/Image/Tractor/Johndeere-230hp.jpg", price: '1600', title: '5370/230HP', Names: "Tractor", company: 'John-Deere', id: "30" },
    { img: "/Nav/Image/Tractor/messy,385,50hp.jpeg", price: '890', title: '385/50HP', Names: "Tractor", company: 'Messy', id: "31" },
    { img: "/Nav/Image/Tractor/McCormick-III,380HP.jpg", price: '1200', title: 'III/380HP', Names: "Tractor", company: 'McCormick', id: "32" },
    { img: "/Nav/Image/Tractor/Kubota,L5018,35hp.jpg", price: '670', title: 'L5018/35HP', Names: "Tractor", company: 'Kubota', id: "33" },
    { img: "/Nav/Image/Tractor/NH-3230,40hp.jpg", price: '720', title: '3230/40HP', Names: "Tractor", company: 'New-Holland', id: "34" },
    { img: "/Nav/Image/Tractor/Swaraj,744,50hp.jpg", price: '789', title: '744/50HP', Names: "Tractor", company: 'Swaraj', id: "35" },
    { img: "/Nav/Image/Tractor/Sonalikha,di,345,45hp.jpeg", price: '720', title: 'di-354/45HP', Names: "Tractor", company: 'Sonalikha', id: "36" },
    { img: "/Nav/Image/Tractor/Kubota,L3480,30hp.jpeg", price: '610', title: 'L3480/30HP', Names: "Tractor", company: 'Kubota', id: "37" },
    { img: "/Nav/Image/Tractor/Jd-5075e,75hp.jpg", price: '880', title: '5075e/75HP', Names: "Tractor", company: 'John-Deere', id: "38" },
    { img: "/Nav/Image/Tractor/Massy-4560-240Hp.jpg", price: '1120', title: '4560/240HP', Names: "Tractor", company: 'Massy', id: "39" },
    { img: "/Nav/Image/Tractor/NH-4060,45hp.jpg", price: '740', title: '4060/45HP', Names: "Tractor", company: 'New-Holland', id: "40" }
]
const combine = [
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,ace.jpg", title: '150HP', company: 'John-Deer', id: "41" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,newholland.jpg", title: '100HP', company: 'New-Holland', id: "42" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,alxa.jpg", title: '60HP', company: 'Swaraj', id: "43" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,ace.jpg", title: '65HP', company: 'Ace', id: "44" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,ace2.jpg", title: '70HP', company: 'Ace', id: "45" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,Atles.jpeg", title: '80HP', company: 'Aatles', id: "46" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,alxa.jpg", title: '30HP', company: 'HIMANI', id: "47" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine.tendt.jpg", title: '100HP', company: 'Tendt', id: "48" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,alxa.jpg", title: '50HP', company: 'Alexa', id: "49" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,benson.jpeg", title: '90HP', company: 'Benson', id: "50" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,elkha.jpg", title: '35HP', company: 'Elkha', id: "51" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,kubota.jpg", title: '35HP', company: 'Kubota', id: "52" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,kubota2.jpg", title: '60HP', company: 'Kubota', id: "53" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,malkit.jpg", title: '50HP', company: 'Malkit', id: "54" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,messy.jpg", title: '50HP', company: 'Messy', id: "55" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,mini,tefe.jpeg", title: '40HP', company: 'Mini-XMini', id: "56" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,newholland.jpg", title: '60HP', company: 'New Holland', id: "57" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,tendt.jpg", title: '150HP', company: 'Tendt', id: "58" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,surya.jpeg", title: '40HP', company: 'Surya', id: "59" },
    { Names: "Combine", price: "1", img: "/Nav/Image/Combine/combine,rice.jpg", title: '60HP', company: 'Rack', id: "60" }
]
const trolley = [
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley1.jpeg', price: '100', title: '17/7', company: 'Abc', id: "101" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley2.jpeg', price: '110', title: '14/6', company: 'Xyz', id: "102" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley3.jpeg', price: '120', title: '19/7.4', company: 'Hindustan', id: "103" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley4.jpeg', price: '93', title: '17/7.3', company: 'Radio', id: "104" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley5.jpeg', price: '110', title: '14/5', company: 'Port', id: "105" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley6.jpeg', price: '75', title: '19/7', company: 'Haryana', id: "106" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley7.jpeg', price: '80', title: '20/7', company: 'Punjab', id: "107" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley8.jpeg', price: '200', title: '20/6', company: 'UTF', id: "108" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley9.jpeg', price: '105', title: '17/5', company: 'YVE', id: "109" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley1.jpeg', price: '95', title: '14/7', company: 'Mnygv', id: "110" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley1.jpeg', price: '150', title: '19/5.5', company: 'Ajhgv', id: "111" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley1.jpeg', price: '156', title: '17/7.5', company: 'Surya', id: "112" },
    { Names: "Trolley", img: '/Nav/Image/Trolley/Trolley1.jpeg', price: '80', title: '14/9', company: 'Deep', id: "113" }, 19
]
const seeds = [
    { Names: "Seeds", img: "/Nav/Image/Seeds/Almonds.jpeg", price: 1100, title: "Almond", company: 'Star Kashmir', id: '1' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Angir.jpeg", price: 1100, title: "Anjir", company: 'Rijan', id: '2' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Apple.jpeg", price: 1200, title: "Apple", company: 'Jammu @ Kishmir', id: '3' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Barzra.jpeg", price: 500, title: 'Bazara', company: 'Nurshaw', id: '4' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Capcium-allthatgrow.jpeg", price: 120, title: 'Capcium', company: 'All That Grow', id: '5' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Capcium-Indus.jpeg", price: 300, title: 'Capcium', company: 'Indus', id: '6' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Capcium-orkets.jpeg", price: 240, title: 'Capcium', company: 'Orkit', id: '7' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Carrot-Safal.jpeg", price: 540, title: 'Capcium', company: 'Safal', id: '8' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Carrot-Sakata.jpeg", price: 80, title: 'Carrot', company: 'Sakata', id: '9' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Chilli-Mahyco.jpeg", price: 420, title: 'Chilli', company: 'Mahyco', id: '10' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Corn-black.jpeg", price: 120, title: 'Corn', company: 'Rigdev', id: '11' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Graps.jpeg", price: 320, title: 'Graps', company: 'Kalif', id: '12' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Gwar-Grawtime.jpeg", price: 420, title: 'Gwar', company: 'Bombay', id: '13' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Mango.jpeg", price: 520, title: 'Mango', company: 'Jaigrow', id: '14' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Mung-Bombay.jpeg", price: 400, title: 'Mung', company: 'Blala', id: '15' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Mustrad.jpeg", price: 120, title: 'Mustrad', company: 'Surya', id: '16' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Peas.jpeg", price: 20, title: 'Peas', company: 'Hindus', id: '17' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/POMEGRANATE.webp", price: 620, title: 'POMEGRANATE', company: 'Almas', id: '18' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Rice-1401.jpeg", price: 720, title: 'Rice', company: '1401', id: '19' },
    { Names: "Seeds", img: "/Nav/Image/Seeds/Wheat-1409.jpeg", price: 120, title: 'Wheat', company: 'Israil', id: '20' }
]
const accessories = [
    { Names: "Accessories", img: '/Nav/Image/Accessories/axe.jpeg', company: "", price: '560', title: 'Axe', id: "81" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/bucket.jpeg', company: "", price: '220', title: 'Bucket', id: "82" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/gardenfork.jpeg', company: "", price: '300', title: 'Garden Fork', id: "83" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/handCultivater.jpeg', company: "", price: '450', title: 'Hand Cultivater', id: "84" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/gardenfork.jpeg', company: "", price: '400', title: 'Garden Fork', id: "85" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/gardenShear.jpeg', company: "", price: '270', title: 'Garden Shear', id: "86" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/gardenShear2.jpeg', company: "", price: '280', title: 'Garden Shear', id: "87" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/gloves.jpeg', company: "", price: '90', title: 'Gloves', id: "88" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/hoe1.jpeg', company: "", price: '400', title: 'Hoe', id: "89" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/hose.jpeg', company: "", price: '600', title: 'Hose', id: "90" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/hoe2.jpeg', company: "", price: '870', title: 'Hoe', id: "91" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/hoe3.jpeg', company: "", price: '780', title: 'Hoe', id: "92" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/karni.jpeg', company: "", price: '180', title: 'Karni', id: "93" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/ladder.jpeg', company: "", price: '1200', title: 'Ladder', id: "94" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/rake.png', company: "", price: '600', title: 'Rake', id: "95" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/sckile.jpeg', company: "", price: '250', title: 'Sckile', id: "96" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/sprayer.jpeg', company: "", price: '1700', title: 'Sprayer', id: "97" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/sprayer2.jpeg', company: "", price: '2300', title: 'Sprayer', id: "98" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/trowel.jpeg', company: "", price: '200', title: 'Trowel', id: "99" },
    { Names: "Accessories", img: '/Nav/Image/Accessories/wheelbarrow.jpeg', company: "", price: '1000', title: 'Wheel Barrow', id: "100" }
]
const cultivater = [
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater9.png", company: "", price: '90', title: '9 Feet', id: "61" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater10.jpeg", company: "", price: '84', title: '10 Feet', id: "62" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater11.jpeg", company: "", price: '61', title: '11 Feet', id: "63" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater12.jpeg", company: "", price: '54', title: '12 Feet', id: "64" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater13.jpeg", company: "", price: '33', title: '13 Feet', id: "65" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater14.jpeg", company: "", price: '14', title: '14 Feet', id: "66" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater15.jpeg", company: "", price: '15', title: '15 Feet', id: "67" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater16.jpeg", company: "", price: '16', title: '16 Feet', id: "68" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater17.jpeg", company: "", price: '17', title: '17 Feet', id: "69" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater18.jpeg", company: "", price: '18', title: '18 Feet', id: "70" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater19.jpeg", company: "", price: '19', title: '19 Feet', id: "71" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater20.jpeg", company: "", price: '70', title: '20 Feet', id: "72" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater1.jpeg", company: "", price: '76', title: '1 Feet', id: "73" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater2.jpeg", company: "", price: '49', title: '2 Feet', id: "74" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater5.jpeg", company: "", price: '55', title: '5 Feet', id: "75" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater7.jpeg", company: "", price: '65', title: '7 Feet', id: "76" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater8.jpeg", company: "", price: '90', title: '8 Feet', id: "77" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater3.jpeg", company: "", price: '80', title: '3 Feet', id: "78" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater4.webp", company: "", price: '60', title: '4 Feet', id: "79" },
    { Names: "Cultivater", img: " /Nav/Image/Cultivater/Cultivater6.webp", company: "", price: '65', title: '6 Feet', id: "80" }
]

let mainArr = [...tractors, ...combine, ...trolley, ...seeds, ...accessories, ...cultivater]

selectMenu.addEventListener('click', (e) => {
    if (e.target.innerText == 'All') {
        allData = mainArr
    }
    else {
        allData = mainArr.filter((value) => value.Names == e.target.innerText)
    }
    allItem.innerHTML = '';
    for (let i = 0; i < allData.length; i++) {
        allItem.innerHTML += `<div class="item">
        <h1 class="names">${allData[i].Names}</h1>
        <p class="company">${allData[i].company}</p>
        <p class="title">${allData[i].title}</p>
        <div class="xyz">
        <div class="xyz1">
        <h1>${allData[i].Names}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ducimus perspiciatis atque soluta veniam tenetur! Suscipit, autem eveniet debitis tempora voluptate optio distinctio sunt, nemo sequi eius necessitatibus provident ipsam?</p>
        </div>
        <img class="image" src=${allData[i].img}> 
        </div>
        <div class="Price"><p>Price :</p><p class="amt">${allData[i].price}</p></div>
        <div class="plusMinus"><button class="minus">-</button><p class="itemCount">0</p><button class="plus">+</button></div>
        <div class="totelAmount"><span>Amount</span><span class="amount">0</span><button class="add">Add</button> </div> 
        </div>`
    }
})

let allData = mainArr.sort(() => Math.random() - 0.5)
let allItem = document.querySelector('.allItem')
for (let i = 0; i < allData.length; i++) {
    allItem.innerHTML += `<div class="item">
    <h1 class="names">${allData[i].Names}</h1>
    <p class="company">${allData[i].company}</p>
    <p class="title">${allData[i].title}</p>
    <div class="xyz">
    <div class="xyz1">
    <h1>${allData[i].Names}</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos ducimus perspiciatis atque soluta veniam tenetur! Suscipit, autem eveniet debitis tempora voluptate optio distinctio sunt, nemo sequi eius necessitatibus provident ipsam?</p>
    </div>
    <img class="image" src=${allData[i].img}> 
    </div>
    <div class="Price"><p>Price :</p><p class="amt">${allData[i].price}</p></div>
    <div class="plusMinus"><button class="minus">-</button><p class="itemCount">0</p><button class="plus">+</button></div>
   <div class="totelAmount"><span>Amount</span><span class="amount">0</span><button class="add">Add</button> </div> 
    </div>`
}
let minus = document.querySelectorAll('.minus')
let plus = document.querySelectorAll('.plus')
let itemCount = document.querySelectorAll('.plusMinus p')
let amount = document.querySelectorAll('.amount')
let amt = document.querySelectorAll('.amt')

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => {
        if (itemCount[i].innerText > 0) {
            itemCount[i].innerText--
            amount[i].innerText = amount[i].innerText - amt[i].innerText
        }
    })
    plus[i].addEventListener('click', () => {
        itemCount[i].innerText++
        amount[i].innerText = itemCount[i].innerText * amt[i].innerText

    })
}
let cartDetails = document.querySelector('.cartDetails')
let add = document.querySelectorAll('.add')
let lastSub = document.querySelector('.lastSub')
let cart = document.querySelector('.cart')
let navCart1 = document.querySelector('.navCart1')
let lastSubAmt = document.querySelector('.lastSubAmt')
let cartItems = document.querySelector('.cartItems')
let sum = 0;

let cartList = []
for (let i = 0; i < add.length; i++) {
    add[i].addEventListener('click', () => {
        cartItems.innerText++
        cartList.push(allData[i])
        console.log(allData[i])
        cartDetails.innerHTML = ' '
        for(let j=0;j<cartList.length;j++){

            cartDetails.innerHTML +=`
            <div class='cartD1' name="${allData[i].id}">
            <img src="${cartList[j].img}">        
            <div class='cartD3'>
            <h2>${cartList[j].Names}</h2>
            <div class="cartD8">
            <p>Quantity</p><p class="cartD4">${itemCount[i].innerText}</p>
            </div>
            <div class="cartD5">
            <p class="cartD6">Amt :-</p> <p class="cartD7">${cartList[j].price*itemCount[i].innerText} </p>
            </div>
                    </div>
                    <button class='remove' name="${allData[i].id}">Remove</button>
                    </div>
                    `
                    }
        
        sum += Number(amount[i].innerText)
        lastSubAmt.innerText = sum;
        itemCount[i].innerText = 0;
        amount[i].innerText = 0;
      
    })
}

let abc = document.querySelectorAll('.cartDetails cartD1')
cart.addEventListener("click", () => {
    navCart1.classList.toggle('togle')
})

// let remove = document.querySelectorAll('.remove')

// function removeItem(e) {
//     console.log(" list"+cartList)
//     const filterData = cartList.filter((val)=> val.id != e)
 
//    showCart(filterData)
// }

let ct = document.querySelector('.cartDetails');
ct.addEventListener('click', (e) => {
    if(e.target.matches('button')) {
        alert(e.target.getAttribute('name'))
    }
})
