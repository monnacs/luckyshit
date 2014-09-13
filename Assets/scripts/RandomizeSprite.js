#pragma strict
#pragma downcast

var newObjPositionX = 0.0;
var objects : GameObject[];
private var lastObject : GameObject;
private var evenOdd = true;

function Start () {
	evenOdd = true;
	RandomizeNext();
}

function DestroyLast () {
	Destroy(lastObject);
}

function RandomizeNext () {
	var rand = Mathf.Abs(Random.value * objects.Length);
	lastObject = Instantiate(objects[rand]);
	lastObject.transform.parent = transform;
	
	evenOdd = !evenOdd;
	var X = 0;
	if (evenOdd) X = newObjPositionX;
	lastObject.transform.localPosition = new Vector3(X, 0, 0);
}