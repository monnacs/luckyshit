#pragma strict

var shitPrefab:GameObject;

function Start () {
	
		shitPrefab.transform.position = transform.position ;
	
}

function Update () {
	if(Input.GetKeyDown("space")){

		Instantiate(shitPrefab, transform.position, transform.rotation);
		

     }
}