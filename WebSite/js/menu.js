// 모든 메뉴 아이템 요소 가져오기
var menuItems = document.querySelectorAll('.list-wrap > li');

// 클릭한 메뉴 아이템을 저장할 변수
var activeMenuItem = null;

// 모든 메뉴 아이템에 마우스 오버 이벤트 추가
menuItems.forEach(function(item) {
  item.addEventListener('mouseover', function() {
    // 현재 클릭한 아이템을 제외하고 모든 서브메뉴 숨기기
    menuItems.forEach(function(menuItem) {
      if (menuItem !== activeMenuItem) {
        var submenu = menuItem.querySelector('ul');
        if (submenu) {
          submenu.style.display = 'none';
        }
      }
    });

    // 현재 아이템의 서브메뉴 표시
    var submenu = this.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });

  item.addEventListener('click', function() {
    // 클릭한 아이템이 이미 활성화된 아이템이 아닌 경우
    if (activeMenuItem !== this) {
      // 이전에 활성화된 아이템이 있으면 비활성화 처리
      if (activeMenuItem) {
        var submenu = activeMenuItem.querySelector('ul');
        if (submenu) {
          submenu.style.display = 'none';
        }
      }

      // 현재 클릭한 아이템을 활성화 상태로 설정
      activeMenuItem = this;

      // 현재 클릭한 아이템의 서브메뉴 표시
      var submenu = this.querySelector('ul');
      if (submenu) {
        submenu.style.display = 'block';
      }
    }
  });
});