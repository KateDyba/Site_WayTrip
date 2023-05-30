gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

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
	gsap.fromTo('.opacity-change3', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change3',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})
	gsap.fromTo('.opacity-change4', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change4',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})
	gsap.fromTo('.opacity-change5', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change5',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})
	gsap.fromTo('.opacity-change6', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change6',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})
	gsap.fromTo('.opacity-change7', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.opacity-change7',
			start: 'top',
			end: 'bottom',
			scrub: true
		}
	})


/*	let itemsL = gsap.utils.toArray('.idak')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -40 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: '60',
				scrub: true
			}
		})
	})
	
	/*let itemsR = gsap.utils.toArray('.u-sheet')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 150 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: '100',
				scrub: true
			}
		})
	})*/

}