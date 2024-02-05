let isDOBOpen=false;
let dateOfBirth;
const settingsCogEle=document.getElementById('settingIcon');
const settingContentEle=document.getElementById('settingContent');
const initialTxtele=document.getElementById('initialTxt');
const afterAddDOBtxtele=document.getElementById('afterAddDOBtxt');
const dobButtonEle=document.getElementById('dobButton');
const dobInputEle=document.getElementById('dobInput');

const years=document.getElementById('years');
const months=document.getElementById('months');
const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const secounds=document.getElementById('secounds');

const makeTwoDigitNumber=(number)=>{
    if(number>9){
        return number;
    }
    else{
        return "0"+number;
    }
}

const toggleDOBSelector=()=>{
    if(isDOBOpen){
        settingContentEle.classList.add("hide");
    }
    else{
        settingContentEle.classList.remove("hide");
    }

    console.log("togle", isDOBOpen)

    isDOBOpen = !isDOBOpen;
};

const updateAge=()=>{

    const currentDate=new Date();
    const dateDiff=currentDate-dateOfBirth;
    const year=Math.floor(dateDiff/(1000*60*60*24*365));
    const month=Math.floor(dateDiff/(1000*60*60*24*365))%12;
    const day=Math.floor(dateDiff/(1000*60*60*24))%30;
    const hour=Math.floor(dateDiff/(1000*60*60))%24;
    const minute=Math.floor(dateDiff/(1000*60))%60;
    const secound=Math.floor(dateDiff/1000)%60;

console.log(year,month,day,hour,minute,secound)
    years.innerHTML=makeTwoDigitNumber(year);
    months.innerHTML=makeTwoDigitNumber(month);
    days.innerHTML=makeTwoDigitNumber(day);
    hours.innerHTML=makeTwoDigitNumber(hour);
    minutes.innerHTML=makeTwoDigitNumber(minute);
    secounds.innerHTML=makeTwoDigitNumber(secound);

    

};

const lifeSpan=()=>{

   const dateString =dobInputEle.value;
    dateOfBirth= new Date(dateString);
    console.log(dateOfBirth);
    if(dateOfBirth){
        initialTxtele.classList.add("hide");
        afterAddDOBtxtele.classList.remove("hide");
        updateAge();
        setInterval(()=>updateAge(),1000)
    }
    else{
        afterAddDOBtxtele.classList.add("hide");
        initialTxtele.classList.remove("hide");
    }

}



settingsCogEle.addEventListener('click',toggleDOBSelector);
dobButtonEle.addEventListener('click',lifeSpan);


