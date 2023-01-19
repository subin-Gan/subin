let btnw = document.getElementById('btn_work')
console.log(btnw)

let list = document.querySelector('.work_list')
console.log(list)

btnw.addEventListener('click',function(){
    btnw.classList.toggle('on')
    list.classList.toggle('on')
    btnc.classList.remove('on')
    listb.classList.remove('on')                    
})
// 버튼도 바뀌고 리스트도 없어져야 하기 때문에 두 개 다 넣어줘야 한다. 

let btnc = document.getElementById('btn_company')
console.log(btnc)

let listb = document.querySelector('.company_list')
console.log(listb)



btnc.addEventListener('click',function(){
    btnc.classList.toggle('on')
    listb.classList.toggle('on')
    btnw.classList.remove('on')
    list.classList.remove('on')
})

//***************************검색폼******************************************************* */

let btns = document.querySelector('.search a');
console.log(btns);
let searchform = document.querySelector('.search_form');
console.log(searchform);

btns.addEventListener('click',function(){
    searchform.classList.toggle('on');
});


// 닫기 버튼
let btnclose = document.querySelector('.btn_close')
btnclose.addEventListener('click',function(){
    btnclose.classList.add('on')
});




// 재생, 중지********************************************************************************
let btnPause=document.querySelector(".btn_pause")
console.log(btnPause)

let sw=true;
//처음에만 참으로 가도록 이벤트 위에다가 넣어주기 !!!

btnPause.addEventListener('click',function(){
    //switch 기법
 
    console.log("클릭")

    if(sw==true){
        btnPause.classList.add("on")
        // on이 자동으로 들어가면서 클릭했을 때 플레이 버튼이 바뀜
        swiper.autoplay.stop()
        sw=false
        // 화면이 멈춤
        // 여기서 값을 false로 초기화 시켜줌 

    }else{
        btnPause.classList.remove("on")
        swiper.autoplay.start()
        sw=true
        //다시 false값을 실행시켰으니까 다시 값을 true로 초기화 해서 처음부터 실행시킴
    }

  
})


//****************************************
let all = document.querySelector('.all a')
console.log(all)
let pg = document.querySelector('.sitemap_wrap')
console.log(pg)
let cl= document.querySelector('.btn_close')
console.log(cl)

all.addEventListener('click',function(){
    pg.classList.add('on')                
})

cl.addEventListener('click',function(){
    pg.classList.remove('on')                
})










// 버튼을 클릭하면 on이라는 걸 넣어주세요 (자동으로)
// 버튼을 클릭하면 어떤일이 실행되는지를 써준다.
// 문법 -> btnw.addEventListener
// add,remove,toggle 은 .classlist에 들어가있다. 

