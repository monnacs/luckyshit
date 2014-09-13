#pragma strict


var moveHowMuch = 0.1;
var floorObj:GameObject;


private var initialPosition;

function Start () {
	
	initialPosition = transform.position;
}

function Update () {
	transform.position.y -= moveHowMuch;
}

function OnCollisionEnter (col:Collision){
Debug.Log(col);  
if(col.gameObject == floorObj)
 {
     Destroy(col.gameObject);
    }
}