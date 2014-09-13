#pragma strict

var playerLives: int;
static var playerScore: int;

function Start () {

}

function Update () {
	var score: String = "";
	score = playerScore.ToString();
	GetComponent(TextMesh).text = score;
}