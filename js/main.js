new fullpage('#fullpage', {
	
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#1bbc9b', '#FFB2F5', '#FFC19E', '#BCE55C','#5CD1E5'],
    navigation: true,
	navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','본사위치','연구소위치'], 
    easing: 'easeInOutCubic',
    anchors: ['s1', 's2', 's3', 's4', 's5'],
    menu: '.gnb_list',
});

