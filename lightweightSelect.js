/*

	Lightweight Javascript SELECT Decorator: A lightweight Javascript that decorates the HTML SELECT dropdown button.
 	Copyright (C) 2014 Choon Jin Ng

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */

var LightweightSelect = {
	init: function() {
		var inputs = document.getElementsByTagName("input"), span = Array(), ul = Array(), div = Array(), textnode, option, active;
		inputs = document.getElementsByTagName("select");
		for(a = 0; a < inputs.length; a++) {
			if(inputs[a].className.indexOf("styled") > -1) {
				option = inputs[a].getElementsByTagName("option");
				active = option[0].childNodes[0].nodeValue;
				textnode = document.createTextNode(active);
				for(b = 0; b < option.length; b++) {
					if(option[b].selected == true) {
						textnode = document.createTextNode(option[b].childNodes[0].nodeValue);
					}
				}

				div[a] = document.createElement("div");
				div[a].className = "selectSet";
				div[a].id = "selectSet" + inputs[a].name;

				span[a] = document.createElement("span");
				span[a].className = "select";
				span[a].id = "select" + inputs[a].name;
				span[a].onclick = function(){
					var displayStyle = this.nextSibling.style.display;
					this.nextSibling.style.display = (displayStyle != 'none' ? 'none' : 'block');
				};
				span[a].appendChild(textnode);
				inputs[a].parentNode.insertBefore(div[a], inputs[a]);
				div[a].appendChild(span[a]);

				ul[a] = document.createElement("ul");
				ul[a].className = "selectMenu";
				ul[a].id = "selectMenu" + inputs[a].name;
				ul[a].style.display = 'none';
				div[a].appendChild(ul[a]);

				var options = inputs[a].getElementsByTagName("option");
				for(var c = 0; c < options.length; c++){
					var li = document.createElement("li");
					var text = document.createTextNode(options[c].childNodes[0].nodeValue);
					li.setAttribute('value', options[c].value);
					li.text = options[c].nodeValue;
					li.appendChild(text);
					li.onclick = function(){
						var spannode = this.parentNode.previousSibling;
						spannode.childNodes[0].nodeValue = this.childNodes[0].nodeValue;
						spannode.setAttribute('value', this.getAttribute('value'));
						var menunode = this.parentNode;
						menunode.style.display = 'none';
						var realselect = menunode.parentNode.nextSibling;
						realselect.selectedIndex = Array.prototype.indexOf.call(this.parentNode.getElementsByTagName('li'), this);
					};
					ul[a].appendChild(li);
				}

				inputs[a].style.display = 'none';
				inputs[a].selectedIndex = 0;
			}
		}
	}
}
window.onload = LightweightSelect.init;