#pragma strict
#pragma downcast

var moveHowMuch = 0.5;
var repeatAfter = 34;
private var initialRepeatAfter;
private var initialPosition;

function Start () {
	initialRepeatAfter = repeatAfter;
	initialPosition = transform.position;
}

function Update () {
	transform.position.x -= moveHowMuch;
	repeatAfter -= moveHowMuch;
	if (repeatAfter < 0) {
		repeatAfter = initialRepeatAfter;
		transform.position = initialPosition;
	}
}
