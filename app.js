const heighInput=document.getElementById("height");
const weighInput=document.getElementById("weight");
const calculatebt=document.getElementById("calculatebtn");
const bmivalaue=document.getElementById("bmiValue");
const bmiCategory=document.getElementById("bmiCategory");
const seggestion=document.getElementById("seggestion");
calculatebt.addEventListener('click',(e)=>{
    const heighincm=parseFloat(heighInput.value);
    const weight=parseFloat(weighInput.value);
    if(isNaN(heighincm) || isNaN(weight)|| heighincm<=0||weight<=0){
        swal.fire({
            title: "error",
            Text: "pleas enter valid heigh or weight",
            icon: "error",
            confirmButtonText:"okay"
        })
        return;
    }
    const heighinm=heighincm/100;
    const bmi=(weight/(heighinm*heighinm)).toFixed(2);
    bmivalaue.textContent=bmi;
    bmiCategory.textContent=getBMICategory(bmi);
    seggestion.textContent=getBMISeggestion(bmi)

})
function getBMICategory(bmi){
    if(bmi<18.5){
        return "UnderWeight"
    }else if(bmi>=18.5 && bmi<=24.9){
        return "normal Weight"
    }else if(bmi>=25 && bmi<29.9){
        return "overWeight"
    }else{
        return "Obesity"
    }
}
function getBMISeggestion(bmi){
    if(bmi<18.5){
        return "you are underWeight waxaa ubaahantahay inaa qaadato cunto nafaqo leh o weight-kaaga saxdo😔"
    }else if(bmi>=18.5 && bmi<=24.9){
        return "waxa normal Weight waxaa ubaahantahay inaa sidaada ahaato joogtee cunte dheeli-tiran"
    }else if(bmi>=25 && bmi<29.9){
        return "waxa tahay overWeight waxaa ubaahantahay inaa cuntadaada dheeli-tirto si aad usaxado weightkaaga"
    }else{
        return "waxaa tahay Obesity- heerki laguugu talo galay waa dhaaftaye docotor aad si aad u hesho talooyin caaafimaad"
    }
}