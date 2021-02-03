const slider_monthly = document.querySelector('.slider-monthly')

const price = []
price.push(document.querySelectorAll('.price'))

slider_monthly.addEventListener("click", () => {

    price.forEach(item => {
        //console.log('item :', item);

        if (slider_monthly.classList.toggle("slider-annually")) {
            //console.log("abonnement annuel");

            item[0].textContent = "$199.99"
            item[1].textContent = "$249.99"
            item[2].textContent = "$399.99"
        } else {
            //console.log("abonnement mensuel");

            item[0].textContent = "$19.99"
            item[1].textContent = "$24.99"
            item[2].textContent = "$39.99"
        }
    });
})