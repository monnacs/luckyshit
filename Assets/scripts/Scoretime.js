#pragma strict

function PutInScoreTime (score) {
	GetComponent(TextMesh).text = score.ToString();
}