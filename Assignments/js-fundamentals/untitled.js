var Person = function(inputName,inputGender) {
    this.homePlanet = "Earth"
    this.name = inputName
    this.gender = inputGender
    this.speak = function() {
    	return "sup it's me " + this.name
    }
}

var michaelchurchill = new Person("michael", "male")


var student = {
	name: "thuy",
	speak: function() {
		console.log("hi my name is " + this.name)
	}
}


// make a constructor for a robot. the constructor's input should be the robot's name. 
// the robot created should have a method called greet. it will greet a humon and 
// announce itself.

// give the Robot a starting battery level of 100. Every time he greets someone, his battery 
// should drain by 25.

// if his battery is dead, he will no longer greet.


// add a .charge() method to your robot. it should replenish the battery according to 
 // the input amount.


var Robot = function(inputName,inputCode) {
	this.name = inputName
	this.maxBatteryLevel = 1000
	this.batteryLevel = this.maxBatteryLevel
	
	var readOnlyCode = inputCode

	this.getReadOnlyCode = function() {
		return readOnlyCode
	}

	this.charge = function() {
		var self = this
		setInterval(function(){
			console.log(self)
			self.batteryLevel += 10
			console.log("charging... current battery level: " + self.batteryLevel)
		},1000)
	}

	this.greet = function(additionalMsg) {		
		if (this.batteryLevel > 0) {
			this.batteryLevel -= 25
			return "hey humons. it is i, " + this.name + ". " + additionalMsg
		}
		else {
			return "robot nap time."
		}
	}
}

var robby = new Robot('robby',8675309)
var opty = new Robot('optimus prime',911)
opty.charge()

robby.greet()
