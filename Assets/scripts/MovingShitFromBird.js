﻿#pragma strict

var moveHowMuch = 0.1;

private var initialPosition;

function Start () {
	initialPosition = transform.position;
}

function Update () {
	transform.position.y -= moveHowMuch;
}

function OnCollisionEnter2D (col:Collision2D) {
	if (col.gameObject.tag == "bird") return;// true;
	if (col.gameObject.tag != "floor") {
		Scoreboard.playerScore++;
	}
	Destroy(gameObject);
}