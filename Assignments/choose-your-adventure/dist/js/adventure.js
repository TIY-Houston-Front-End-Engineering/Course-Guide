(function(w) {
	"use strict";
	var activeEl = document.getElementById('active');


	function createSay(heading, subheading) {
		var el = createGeneric(heading);
		if(subheading) {
			var e = document.createElement('h2');
			e.innerHTML = subheading;
			el.appendChild(e);
		}
		return el;
	}

	function createAsk(message) {
		var el = createGeneric(message);
		var e = document.createElement('input');
		e.type = 'text';
		e.className = 'answer';
		el.appendChild(e);
		return el;
	}

	function createChoose(message) {
		var el = createGeneric(message);
		if(arguments.length <= 1) {
			throw 'adventure.choose requires at least one option.';
		}
		for(var i=1; i<arguments.length; i++) {
			var e = document.createElement('button');
			e.innerHTML = arguments[i];
			e.className = 'choose';
			el.appendChild(e);
		}
		return el;
	}

	function createGeneric(message) {
		var el = document.createElement('div');
		el.innerHTML = '<h1>'+message+'</h1>';
		el.className = 'interaction';
		return el;
	}

	function animate(oldInteraction, newInteraction) {
		oldInteraction.className = 'interaction old';
		setTimeout(function() {
			newInteraction.className = 'interaction new';
		}, 100);
	}

	function adventure() {
		var continueEl = document.getElementById('continue');
		var self = this;
		this.currentEl = null;
		this.currentType = null;

		this.say = function(heading, subheading) {
			var newArgs = Array.prototype.slice.call(arguments);
			newArgs.unshift('say');
			executeAction.apply(self, newArgs);
		};

		this.ask = function(heading, subheading) {
			var newArgs = Array.prototype.slice.call(arguments);
			newArgs.unshift('ask');
			executeAction.apply(self, newArgs);
		};

		this.choose = function(heading, subheading) {
			var newArgs = Array.prototype.slice.call(arguments);
			newArgs.unshift('choose');
			executeAction.apply(self, newArgs);
		};


		function executeAction(action) {
			self.currentType = action;
			var oldEl = self.currentEl;

			switch(action) {
				case 'say':
					self.currentEl = createSay(arguments[1], arguments[2]);
				break;
				case 'ask':
					self.currentEl = createAsk(arguments[1]);
				break;
				case 'choose':
					var newArgs = Array.prototype.slice.call(arguments);
					newArgs.shift();
					self.currentEl = createChoose.apply(this, newArgs);
					var options = self.currentEl.querySelectorAll('button');
					for(var i=0; i<options.length; i++) {
						options[i].addEventListener('click', onContinue);
					}
				break;
			}

			activeEl.appendChild(self.currentEl);
			if(oldEl) {
				animate(oldEl, self.currentEl);
			}
			else {
				self.currentEl.className = 'interaction new';
			}
		}

		function onContinue(e) {
			switch(self.currentType) {
				case 'say':
					iterator.next();
				break;
				case 'ask':
					var input = self.currentEl.querySelector('input');
					if(input.value) {
						iterator.next(input.value);
					}
				break;
				case 'choose':
					if(e.target.className === 'choose') {
						iterator.next(e.target.innerHTML);
					}
				break;
			}
		}

		continueEl.addEventListener('click', onContinue);
	};

	w.adventure = new adventure();
})(window);