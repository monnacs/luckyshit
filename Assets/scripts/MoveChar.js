#pragma strict

var moveHowMuch = 0.1;

function Start () {

}

function Update () {
	if (Input.GetKey(KeyCode.UpArrow))
		transform.position.y += moveHowMuch;
	if (Input.GetKey(KeyCode.DownArrow))
		transform.position.y -= moveHowMuch;
	if (Input.GetKey(KeyCode.RightArrow))
		transform.position.x += moveHowMuch;
	if (Input.GetKey(KeyCode.LeftArrow))
		transform.position.x -= moveHowMuch;
}