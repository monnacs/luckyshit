#pragma strict

var minSpawnInterval = 10;
var maxSpawnInterval = 20;
var spawnChance = 0.5;
private var lastSpawn = 0;

function Start () {

}

function Update () {
	if (Time.time - minSpawnInterval > lastSpawn) {
		if (Random.value > spawnChance || Time.time - maxSpawnInterval > lastSpawn) {
			lastSpawn = Time.time;
			BroadcastMessage("RandomizeNext", SendMessageOptions.DontRequireReceiver);
		}
	}
}