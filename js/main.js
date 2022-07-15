new fullpage('#fullpage', {

    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar: true,
    sectionsColor: ['#fff', '#ffb2f5', '#ffc19e', '#bce55c', '#5cd1e5'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['GAH소개', '제다큐어', '연구개발', '본사위치', '연구소위치'],
    easing: 'easeInOutCubic',
    anchors: ['s1', 's2', 's3', 's4', 's5'],
    menu: '.gnb_list',
    normalScrollElements: '#s2',
});

// 햄버거 버튼 클릭
$('.btn_total').click(function() {
    $('.total_menu_z').addClass('active');
});

// 메뉴 팝업 닫기 버튼
$('.btn_totalClose').click(function() {
    $('.total_menu_z').removeClass('active');
});

var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    //scrollbars: true
});

$('.totalMitem').click(function () {
    if ($(this).hasClass('active')) { // 현재 active가 적용된 상태일때
        $(this).removeClass('active')
    } else {
        $('.totalMitem').removeClass('active');
        $(this).addClass('active');
    }
});