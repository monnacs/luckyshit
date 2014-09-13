#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKey(KeyCode.UpArrow))
		transform.position.y += 0.1;
	if (Input.GetKey(KeyCode.DownArrow))
		transform.position.y -= 0.1;
	if (Input.GetKey(KeyCode.LeftArrow))
		transform.position.x += 0.1;
	if (Input.GetKey(KeyCode.RightArrow))
		transform.position.x -= 0.1;
}