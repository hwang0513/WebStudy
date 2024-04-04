// 모든 퀵링크 이미지 요소 가져오기
var quickLinks = document.querySelectorAll('.main-link ul li a');

// 이미지 확대를 위한 div 요소 생성(동적으로 생성)
var divImgContent = document.createElement('div');
divImgContent.className = 'image-container'; // 클래스 이름
document.body.appendChild(divImgContent);

// 이미지 확대를 위한 img 요소 생성(동적으로 생성)
var imgs = document.createElement('img');
divImgContent.appendChild(imgs);

// 모든 퀵링크 이미지에 클릭 이벤트 추가
quickLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // 기본 동작 방지

    // 클릭한 이미지의 속성에서 이미지 URL 가져오기
    var imgUrl = window.getComputedStyle(this.querySelector('span')).getPropertyValue('background-image');
    imgUrl = imgUrl.slice(4, -1).replace(/"/g, ""); // 따옴표 제거

    // 이미지 확대 및 화면 중앙에 배치
    imgs.src = imgUrl;
    divImgContent.style.display = 'block';
  });
});

// 이미지 확대 영역을 클릭하면 숨기기
divImgContent.addEventListener('click', function() {
    divImgContent.style.display = 'none';
});