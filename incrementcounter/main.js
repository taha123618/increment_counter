const counterID = document.querySelectorAll('.counter');

counterID.forEach((counter) => {
    counter.innerHTML =0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');

        const startingCount = +counter.innerHTML;

        const increment = targetCount /100;
debugger;
        if(startingCount < targetCount ){
            counter.innerHTML = '${Math.round(startingCount + increment)}';
            setTimeout(updateCounter,1000)
        }
        else{
            counter.innerHTML = targetCount;
        }


    }

    updateCounter();
});

