
new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#fff', '#ffb2f5', '#ffc19e', '#bce55c', '#5cd1e5'],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','본사위치','연구소위치'], 
    easing: 'easeInOutCubic',
    anchors: ['s1', 's2', 's3', 's4', 's5'],
    menu: '.gnb_list',
    normalScrollElements: '#s2',
});

