//variables

let daily = document.getElementById('daily');
let weekly = document.getElementById('weekly');
let monthly = document.getElementById('monthly');

//  hours spent
let workCurrent = document.querySelector('.current-work');
let workPrevious = document.querySelector('.previous-work');
let playCurrent = document.querySelector('.current-play');
let playPrevious = document.querySelector('.previous-play');
let studyCurrent = document.querySelector('.current-study');
let studyPrevious = document.querySelector('.previous-study');
let exerciseCurrent = document.querySelector('.current-exercise');
let exercisePrevious = document.querySelector('.previous-exercise');
let socialCurrent = document.querySelector('.current-social');
let socialPrevious = document.querySelector('.previous-social');
let selfCareCurrent = document.querySelector('.current-self-care');
let selfCarePrevious = document.querySelector('.previous-self-care');


//fetching data from our local json file


fetch('./data.json')
.then(response => response.json())
.then(data => {

    //daily
    daily.addEventListener('click', (e)=>{
    
        //adding class of active
    if(daily){
        weekly.classList.remove('active');
        monthly.classList.remove('active');
        daily.classList.add('active');
    }
    
    //accessing and displaying the data.
    workCurrent.textContent = `${data[0].timeframes.daily.current}hrs` ;
    workPrevious.textContent = `${data[0].timeframes.daily.previous}hrs` ;
    playCurrent.textContent = `${data[1].timeframes.daily.current}hrs` ;
    playPrevious.textContent = `${data[1].timeframes.daily.previous}hrs` ;
    studyCurrent.textContent = `${data[2].timeframes.daily.current}hrs` ;
    studyPrevious.textContent = `${data[2].timeframes.daily.previous}hrs` ;
    exerciseCurrent.textContent = `${data[3].timeframes.daily.current}hrs` ;
    exercisePrevious.textContent = `${data[3].timeframes.daily.previous}hrs` ;
    socialCurrent.textContent = `${data[4].timeframes.daily.current}hrs` ;
    socialPrevious.textContent = `${data[4].timeframes.daily.previous}hrs` ;
    selfCareCurrent.textContent = `${data[5].timeframes.daily.current}hrs` ;
    selfCarePrevious.textContent = `${data[5].timeframes.daily.previous}hrs` ;

});

    //weekly
    weekly.addEventListener('click', (e)=>{

        //adding and removing class of active
    if(weekly){
    daily.classList.remove('active');
    monthly.classList.remove('active');
    weekly.classList.add('active');
    }
    
    //accessing and displaying data.
    workCurrent.textContent = `${data[0].timeframes.weekly.current}hrs` ;
    workPrevious.textContent = `${data[0].timeframes.weekly.previous}hrs` ;
    playCurrent.textContent = `${data[1].timeframes.weekly.current}hrs` ;
    playPrevious.textContent = `${data[1].timeframes.weekly.previous}hrs` ;
    studyCurrent.textContent = `${data[2].timeframes.weekly.current}hrs` ;
    studyPrevious.textContent = `${data[2].timeframes.weekly.previous}hrs` ;
    exerciseCurrent.textContent = `${data[3].timeframes.weekly.current}hrs` ;
    exercisePrevious.textContent = `${data[3].timeframes.weekly.previous}hrs` ;
    socialCurrent.textContent = `${data[4].timeframes.weekly.current}hrs` ;
    socialPrevious.textContent = `${data[4].timeframes.weekly.previous}hrs` ;
    selfCareCurrent.textContent = `${data[5].timeframes.weekly.current}hrs` ;
    selfCarePrevious.textContent = `${data[5].timeframes.weekly.previous}hrs` ;

});

//monthly
    monthly.addEventListener('click', (e)=>{
    
    //adding and removing class of active
    if(monthly){
        weekly.classList.remove('active');
        daily.classList.remove('active');
        monthly.classList.add('active');
    }
    
    
    //accessing and displaying data.
    workCurrent.textContent = `${data[0].timeframes.monthly.current}hrs` ;
    workPrevious.textContent = `${data[0].timeframes.monthly.previous}hrs` ;
    playCurrent.textContent = `${data[1].timeframes.monthly.current}hrs` ;
    playPrevious.textContent = `${data[1].timeframes.monthly.previous}hrs` ;
    studyCurrent.textContent = `${data[2].timeframes.monthly.current}hrs` ;
    studyPrevious.textContent = `${data[2].timeframes.monthly.previous}hrs` ;
    exerciseCurrent.textContent = `${data[3].timeframes.monthly.current}hrs` ;
    exercisePrevious.textContent = `${data[3].timeframes.monthly.previous}hrs` ;
    socialCurrent.textContent = `${data[4].timeframes.monthly.current}hrs` ;
    socialPrevious.textContent = `${data[4].timeframes.monthly.previous}hrs` ;
    selfCareCurrent.textContent = `${data[5].timeframes.monthly.current}hrs` ;
    selfCarePrevious.textContent = `${data[5].timeframes.monthly.previous}hrs` ;

});


})



