let wrkMinBtn = document.getElementById('wrk-min-btn');
let gdnMinBtn = document.getElementById('gdn-min-btn');
let qnMinBtn = document.getElementById('qn-min-btn');
let wrkPlusBtn = document.getElementById('wrk-plus-btn');
let gdnPlusBtn = document.getElementById('gdn-plus-btn');
let qnPlusBtn = document.getElementById('qn-plus-btn');

let wrkField = document.getElementById('wrk-field');
let gdnField = document.getElementById('gdn-field');
let qnField = document.getElementById('qn-field');
let dailyRevField = document.getElementById('daily-rev-field');
let monthRevField = document.getElementById('mont-rev-field');
let yearRevField = document.getElementById('year-rev-field');

let hnyPriceField =document.getElementById('hny-price');
let totalInvField =document.getElementById('total-inv');
let roiDaysField =document.getElementById('roi-day');

let subBtn = document.getElementById('subBtn');

wrkMinBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(wrkField.value >0 || 0 ){
        wrkField.value -= 1;
    }
    else{
        return
    }
});
gdnMinBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(gdnField.value >0 || 0 ){
        gdnField.value -= 1;
    }
    else{
        return
    }
});
qnMinBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(qnField.value >0 || 0 ){
        qnField.value -= 1;
    }
    else{
        return
    }
});

wrkPlusBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    wrkField.value = Number(wrkField.value) + 1;
})
gdnPlusBtn.addEventListener('click',(e)=>{
    e.preventDefaultqn
    gdnField.value = Number(gdnField.value) + 1;
})
qnPlusBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    qnField.value = Number(qnField.value) + 1;
})



subBtn.addEventListener('click',()=>{
    console.log('Onchange')
    let dailyRewad = 0.05*(wrkField.value) + 0.1*(gdnField.value) + 0.2*(qnField.value);
    
    dailyRevField.value = ((dailyRewad)*(hnyPriceField.value)).toFixed(2);

    monthRevField.value =  (30*(dailyRevField.value)).toFixed(2);

    yearRevField.value = (365*(dailyRevField.value)).toFixed(2);

    roiDaysField.innerText = Math.floor((totalInvField.value)/(dailyRevField.value) +1) ;
    
})