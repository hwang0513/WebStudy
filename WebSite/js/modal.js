// 모달
const modal = document.querySelector(".modal"); 
// 로그인 버튼
const btnReg = document.querySelector(".btn-register");
// 닫기 버튼
const btnExit = document.querySelector(".quit_join");

// 이벤트 연결
btnReg.addEventListener("click", openModal);
btnExit.addEventListener("click", closeModal);



function closeModal(){
    modal.style.display = "none";
}

function openModal() {
    modal.style.display = "block";
}