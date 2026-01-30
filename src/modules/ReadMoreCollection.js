const rootSelector = '[data-js-read-more]'

class ReadMore {
	selectors = {
		root: rootSelector,
		text: '[data-js-read-more-text]',
		button: '[data-js-read-more-button]',
	}

	stateClasses = {
		isExpanded: 'is-expanded',
	}

	constructor(rootElement) {
		this.rootElement = rootElement
		this.textElement = this.rootElement.querySelector(this.selectors.text)
		this.buttonElement = this.rootElement.querySelector(this.selectors.button)
		
		this.removeButtonIfNoNeed()
		this.bind()
	}

	removeButtonIfNoNeed() {
		setTimeout(() => {
			if(this.textElement.scrollHeight <= this.textElement.offsetHeight) {
				this.buttonElement.remove()
			}
		}, 1000)
	}

	onButtonElementClick = () => {
		this.rootElement.classList.toggle(this.stateClasses.isExpanded)
	}

	bind() {
		this.buttonElement.addEventListener('click', this.onButtonElementClick)
	}
}

class ReadMoreCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach(elem => {
			new ReadMore(elem)
		})
	}
}

export default ReadMoreCollection