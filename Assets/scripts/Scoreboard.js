#pragma strict

var playerLives: int;
static var playerScore: int;
private var scoreTime = 0;

function Start () {

}

function Update () {
	var score: String = "";
	score = playerScore.ToString();
	GetComponent(TextMesh).text = score;
	
	if (playerScore > 6) {
		BroadcastMessage("PutInScoreTime", " ");
	}
	
	if (playerScore >= 42) {
		BroadcastMessage("PutInScoreTime", Mathf.CeilToInt( Time.time - scoreTime ));
		
		scoreTime = Time.time;
		playerScore = 0;
	}
}