function changePrices(){
    let checkbox = document.getElementById('price-option-checkbox');
    let priceBusiness = document.getElementById('price-business');
    let pricePro = document.getElementById('price-pro');
    let timePeriod = document.getElementsByClassName('time-period');
    if(checkbox.checked == true){
        priceBusiness.innerHTML = '$115';
        pricePro.innerHTML = '$1100';
        for(let item of timePeriod){
            item.innerHTML = '/year';
        }
    }else{
        priceBusiness.innerHTML = '$10';
        pricePro.innerHTML = '$99';
        for(let item of timePeriod){
            item.innerHTML = '/month';
        }
    }
}
function setButtonStyle(i){
    if(i == 1){
        document.getElementById('prevArrow').style.backgroundColor = 'white';
        document.getElementById('prevArrow').style.color = 'grey';
    }else{
        document.getElementById('prevArrow').style.backgroundColor = '#E2EAED';
        document.getElementById('prevArrow').style.color = '#2500f9';
    }

    if(i == 4){
        document.getElementById('nextArrow').style.backgroundColor = 'white';
        document.getElementById('nextArrow').style.color = 'grey';
    }
    else{
        document.getElementById('nextArrow').style.backgroundColor = '#E2EAED';
        document.getElementById('nextArrow').style.color = '#2500f9';
    }
}
let movement = 0;
let counter = 1;
function nextImage(){
    if(counter < 4){
        document.getElementById('slides').style.transition = 'transform 1s';
        movement -= 20;
        document.getElementById('slides').style.transform = 'translateX('+ movement +'%)';
        counter++;
        setButtonStyle(counter);
    }
}

function prevImage(){
    if(counter > 1){
        document.getElementById('slides').style.transition = 'transform 1s';
        movement += 20;
        document.getElementById('slides').style.transform = 'translateX('+ movement +'%)';
        counter--;
        setButtonStyle(counter);
    }
}