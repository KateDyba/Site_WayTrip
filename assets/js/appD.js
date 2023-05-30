gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//if (ScrollTrigger.isTouch !== 1) 
{

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.opacity-change', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})
	gsap.fromTo('.opacity-change2', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change2',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.pov')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -40 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-600',
				end: '50',
				scrub: true
			}
		})
	})


}