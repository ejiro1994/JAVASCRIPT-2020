const ATTACK_VALUE = 10
const MONSTER_ATTACK_VALUE = 14
const STRONG_ATTACK_VALUE = 20
const HEAL_PLAYER_VALUE = 20

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function endRound() {


    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage
    console.log(`player health: ${parseInt(currentPlayerHealth)}`);
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('you won')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0 ) {
        alert('you lost')
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('its a draw')
    }
}

function  attackMonster(mode) {
    
    let maxDamage
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE
    } else if (mode === 'STRONG_ATTACK'){
        maxDamage = STRONG_ATTACK_VALUE
    }

    
    const damage =  dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage
    endRound()


 console.log(`monster health: ${parseInt(currentMonsterHealth)}`);
 
   
}



function attackHandler() {
    attackMonster('ATTACK')
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK')
  
    

}

function healPlayerHandler() {
    let healValue

    if (currentPlayerHealth >= chosenMaxLife - HEAL_PLAYER_VALUE) {
        alert("you can't heal to more than your max inital health")
        healvalue = chosenMaxLife - currentPlayerHealth
    } else {
        healvalue = HEAL_PLAYER_VALUE
    }
    increasePlayerHealth(healvalue)
    currentPlayerHealth += healvalue

    // endRound()
}
attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)


