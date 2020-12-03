class Card {
	constructor() {
		this.value = null
		this.suit = null
	}
	toString()
		{return this.suit[0] + this.value.toString()}
	valueOf()
		{return this.value}
}
