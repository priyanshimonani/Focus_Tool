var msc=0,sc=0,hc=0, mc=0,cp=0,stops=0;
let intervalId = null;
function start() {
    document.getElementById("poststart").style.display = "block";
    intervalId = setInterval(() => {
        msc++;
        if (msc > 100) {
            msc = 0;
            sc++;
            console.log("Seconds:", sc);
        }
        if (sc > 60) {
            sc = 0;
            mc++;
            console.log("Minutes:", mc);
        }
        if (mc > 60) {
            mc = 0;
            hc++;
            console.log("Hours:", hc);
        }
        document.getElementById("HH").textContent=hc;
        document.getElementById("ss").textContent=msc;
        document.getElementById("MM").textContent=mc;
        document.getElementById("SS").textContent=sc;
    }, 10);
}
function pause(){
     clearInterval(intervalId);
    intervalId = null;
    stops++;
    document.getElementById("stops").textContent=stops;
}
function reset(){
    clearInterval(intervalId);
    intervalId = null;
    msc=0;
    sc=0;
    mc=0;
    hc=0;
    document.getElementById("HH").textContent=hc;
    document.getElementById("ss").textContent=msc;
    document.getElementById("MM").textContent=mc;
    document.getElementById("SS").textContent=sc;
}
function checkphone(){
    cp++;
    document.getElementById("checkedphone").textContent=cp;
}
function resetprog(){
    cp=0;
    stops=0;
    document.getElementById("stops").textContent=stops;
    document.getElementById("checkedphone").textContent=cp;
}