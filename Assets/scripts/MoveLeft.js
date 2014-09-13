#pragma strict
#pragma downcast

var moveHowMuch = 0.1;
var repeatAfter = 20.0;
private var initialRepeatAfter : float;
private var initialPosition : Vector3;
private var notCreatedYet = true;

function Start () {
	initialRepeatAfter = repeatAfter;
	initialPosition = transform.position;
	notCreatedYet = true;
}

function Update () {
	transform.position.x -= moveHowMuch;
	repeatAfter -= moveHowMuch;
	if ((repeatAfter < initialRepeatAfter / 2) && notCreatedYet) {
		BroadcastMessage("RandomizeNext", SendMessageOptions.DontRequireReceiver);
		notCreatedYet = false;
	}
	if (repeatAfter < 0) {
		BroadcastMessage("DestroyLast", SendMessageOptions.DontRequireReceiver);
		repeatAfter = initialRepeatAfter;
		transform.position = initialPosition;
		notCreatedYet = true;
	}
}