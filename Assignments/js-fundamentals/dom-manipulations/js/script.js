var btns = document.getElementsByTagName('input')

String.prototype.contains = function(substr) {
	return this.indexOf(substr) !== -1
}

var $$ = function(selector){
	if ((selector[0] === '.') && (selector.split(' ').length === 1)) return document.getElementsByClassName(selector.slice(1))
	return document.querySelector(selector)
}

var toggleCircleColor = function() {
	if ($$("#colorCircle").style.background.contains("rgb(0, 0, 0)")){
		$$("#colorCircle").style.background = "rgb(255,255,255)"
	}
	else $$("#colorCircle").style.background = "rgb(0,0,0)"
}

var alertThanks = function() {
	alert("thanks for clicking")
}

var cycleImage = function() {
	var img = $$(".exerciseRow img"),
		urlParts = img.src.split('/'),
		index = parseInt(urlParts.pop()),
		newIndex = index + 1 % 10	
	urlParts.push(newIndex)
	console.log(urlParts)
	img.src = urlParts.join('/')
}

var doubleNum = function() {
	var num = parseInt($$("#compoundInvestment").innerHTML)
	$$("#compoundInvestment").innerHTML = num * 2
}

var multiplyDots = function() {
	var numDots = $$(".dot").length * 2
	if (numDots > 1000) {
		$$("#dotsContainer").innerHTML = ''
		numDots = 1
	}
	for (var i = 0; i < numDots ; i ++) {
		var dot = document.createElement('div')
		dot.className = 'dot'
		dot.style.bottom = (Math.random() * 500 + Math.random() * -500) + 'px'
		dot.style.left = (Math.random() * 500 + Math.random() * -500) + 'px'
		$$("#dotsContainer").appendChild(dot)
	}
}

var filterUsers = function() {
	var users = document.querySelectorAll("#userList li"),
		userList = $$("#userList"),
		validUsers = []

	for (var i = 0; i < users.length; i ++) {
		if (users[i].innerHTML.contains('inactive')) {
			userList.removeChild(users[i])
		}
	}
}

btns[0].addEventListener('click',alertThanks)

btns[1].addEventListener('click',toggleCircleColor)

btns[2].addEventListener('click',doubleNum)

btns[3].addEventListener('click',multiplyDots)

btns[4].addEventListener('click',cycleImage)

btns[5].addEventListener('click',filterUsers)
