let container = document.getElementsByClassName('lovelace');



for (let index = 0; index < container.length; index++) {
    if (container[index].nodeType === 1) {
        const element = container[index];
        console.log(element);


        
        // Button navigation OUTSIDE
        const btnBack = element.lastChild.previousSibling.childNodes[1];
        const btnNext = element.lastChild.previousSibling.childNodes[3];
        btnBack.addEventListener("click", (e) => {
            e.preventDefault();
            console.log('btnBack clicked');
        });
        btnNext.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('btnNext clicked');
        });
    }
}