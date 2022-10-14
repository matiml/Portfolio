const seccionesPagina = new fullpage('#fullpage', {
    autoScrolling: true,
	fitToSection: false,
	fitToSectionDelay: 300,
	easing: 'easeInOutCubic',
	scrollingSpeed: 700,
	css3: true,
	easingcss3: 'ease-out',
	loopBottom: false,
	navigation: true,
	menu: '#menu',
	anchors: ['inicio', 'proyectos', 'contacto'],
	navigationTooltips: ['Inicio', 'proyectos', 'Contacto'],
	showActiveTooltip: false,
	// // sectionsColor : ['#000', '#c2c2c2', '#c2c2c2'],
	// verticalCentered: false,
	controlArrows: true,
	slidesNavigation: false,
	
	
});