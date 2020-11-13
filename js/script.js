let btnComp = document.getElementById('btn-comp');

let bars= document.getElementsByClassName('bars');
let barClass=[];
let bar=[];
let greyBloc=[]
for (let i=1;i<=4;i++) {
    bar[i]=document.getElementById('bar-'+i);
}
for (let i=1; i<=4;i++){
    greyBloc[i]=document.getElementById('grey-bloc-'+i);
}
console.log(greyBloc)



function down(i){

    greyBloc[i].setAttribute('class','greyBloc greyBlocDown')

}

btnComp.addEventListener('click',function (){
    bar[1].setAttribute('class','bars bar-charge')
    setTimeout(descentBars,1100);

    function descentBars(){
        let initPosBar=[]
        for (let j=2; j<=4;j++){
            bar[j].style.position="relative";
            initPosBar[j]=bar[j-1].getBoundingClientRect().top-bar[j].getBoundingClientRect().top
            bar[j].style.top=(initPosBar[j]).toString()+'px';
            bar[j].setAttribute('class','bars full-bar')
            // setTimeout(down(1),2000)
            down(1)
            let descentInterval=setInterval(descent,0.01);
            let pos=initPosBar[j];
            function descent(){
                if (pos > 0) {
                    if (j<4) {
                        down(j);
                    }
                    clearInterval(descentInterval)
                    bar[j].style.position='static';

                } else{
                    pos+=3.5;
                    bar[j].style.top=pos+"px";
                }
            }
        }
    }

})







