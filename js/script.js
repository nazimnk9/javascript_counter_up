let counter = document.querySelectorAll(".counter");
let array = Array.from(counter);

array.map((item)=>{
    // console.log(item.dataset.count);
    item.innerHTML = 0
    function counterUp(){
        const count = +item.getAttribute("data-count");
        const c = +item.innerHTML
        const increment = count/200
        if(c < count){
            item.innerHTML = `${Math.ceil(c + increment)}`
            // console.log(item.innerHTML);
            setTimeout(counterUp, 30)
        }else{
            item.innerHTML = count
        }

    }
        counterUp();
})