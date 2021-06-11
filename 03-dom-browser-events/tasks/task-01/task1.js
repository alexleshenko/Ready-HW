function createCounter(startCount = 0, incrementor = 1) {
	if (startCount !== Number(startCount) || incrementor !== Number(incrementor)) {
  throw "Only numeric params are allowed"
  }
	let current = startCount
	const counter = () => {
		current =+ current + incrementor
		return current - incrementor 
	}
counter.resetCounter = () => {
		current = startCount
}
	return counter 
}
const test1 = createCounter(25, 5)
console.log(test1())
console.log(test1())
test1.resetCounter()
console.log(test1())