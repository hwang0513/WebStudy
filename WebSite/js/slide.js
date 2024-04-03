/* 
  이미지, 이전 다음 버튼
  imgIndex = 현재 이미지 인덱스
  1. 현재 이미지를 먼저 표시한다. 
  * 이미지의 length 만큼 돌아서 none 처리 후 현재 이미지index값을 넣어 block처리 후 보여준다.
  * 이전 슬라이드 함수 (img 인덱스를 -1 시킨다. 0보다 작아질경우 length값을 넣는다)
  * 다음 슬라이드 함수 (img 인덱스를 +1 시킨다. length값 보다 커질경우 0으로 초기화시킨다.)
  * css부분은 js에서 빼고 css에서 처리해서 넣는다.
*/
  
let img = document.querySelectorAll(".slides > img");
let prevbtn = document.querySelector(".prev-btn");
let nextbtn = document.querySelector(".next-btn");
  
// 현재 이미지 index
let imgIndex = 0;

// 현재 이미지 표시
showSlides(imgIndex);

// 슬라이드 보여주기
function showSlides(index){
    for(let i = 0; i < img.length; i++){
        img[i].style.display = 'none';
    }
    img[index].style.display = 'block';
}

// 이전 슬라이드 함수
prevbtn.onclick = function() {
    // index값 1 감소
    imgIndex--;

    // index값이 0보다 작아지면 img의 길이값을 넣는다.
    if(imgIndex < 0){
        imgIndex = img.length - 1;
    }
    // 슬라이드 보여주기
    showSlides(imgIndex);
}

// 다음 슬라이드 함수
nextbtn.onclick = function() {
    // index값 1 증가
    imgIndex++;

    // index값이 length보다 커지면 0으로 초기화시킨다.
    if(imgIndex > img.length - 1){
        imgIndex = 0;       
    }
    //슬라이드 보여주기
    showSlides(imgIndex);
}