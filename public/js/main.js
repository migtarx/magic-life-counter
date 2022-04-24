var yourLife = 0;
var enemyLife = 0;
var player = 1;
prepareOnClicks()

function AddLife(player){
    $.get(`/addLife/${player}`, function(data, status){
        if (data != "done") alert("Error while conecting to the server");
    });
}

function RemoveLife(player){
    $.get(`/removeLife/${player}`, function(data, status){
        if (data != "done") alert("Error while conecting to the server");
    });
}

function Reset() {
    $.get(`/reset`, function(data, status){
        if (data != "done") alert("Error while conecting to the server");
    });
}

function SwitchPlayer() {
    player == 1 ? player = 2 : player = 1;
}

function prepareOnClicks() {
    document.getElementById('YourUp').onclick = function() { AddLife(player == 1 ? 1 : 2) }
    document.getElementById('YourDown').onclick = function() { RemoveLife(player == 1 ? 1 : 2) }
    document.getElementById('EnemyUp').onclick = function() { AddLife(player == 1 ? 2 : 1) }
    document.getElementById('EnemyDown').onclick = function() { RemoveLife(player == 1 ? 2 : 1) }
    document.getElementById('reset').onclick = function() { Reset() }
    document.getElementById('player-switcher').onclick = function() { SwitchPlayer() }
}

function getLifeCounters(){
    $.get(`/playersLifes`, function(data, status){
        let lifes = data.split(":");
        if (player == 1){
            document.getElementById('YourCount').innerHTML = lifes[0];
            document.getElementById('EnemyCount').innerHTML = lifes[1];
        } else {
            document.getElementById('YourCount').innerHTML = lifes[1];
            document.getElementById('EnemyCount').innerHTML = lifes[0];
        }
    });
}

setInterval(function(){
    document.getElementById('player-switcher').innerHTML = `🔄 Player ${player}`;
    getLifeCounters()
}, 100);