#pragma strict
#pragma downcast

var newObjPositionX = 0.0;
var objects : GameObject[];
private var initialPosition : Vector3;

function Start () {
	initialPosition = transform.position;
	RandomizeNext();
}

function RandomizeNext () {
	var rand = Mathf.Abs(Random.value * objects.Length);
	var lastObject = Instantiate(objects[rand]);
	lastObject.transform.parent = transform;
	lastObject.transform.position = initialPosition;
}