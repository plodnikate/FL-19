/*eslint no-magic-numbers:*/
class Display {
    constructor(game){
        this.game = game;
    }

    start(){
        const button = document.getElementsByClassName('start')[0];
        button.addEventListener('click', (event) => this.showCharacters(event, this));
    }

    showCharacters(event, displayObj){
        alert('Choose your fighter');
        event.currentTarget.classList.add('hidden');    
        const charactersProperties = displayObj.game.getCharactersProperties();
        for(let i=0; i<8; i++){
            let characterContainer = document.createElement('button');
            document.getElementsByClassName('characters-list')[0].appendChild(characterContainer);
            characterContainer.append(charactersProperties[i].name)
            characterContainer.id = i;
            characterContainer.addEventListener('click', (event) => displayObj.clickCharacterButton(event, displayObj));
        }
    }
    clickCharacterButton(event, displayObj){
        const id = event.currentTarget.id;
        displayObj.game.createUnitByCharacterId(id);
        document.getElementsByClassName('characters-list')[0].classList.add('hidden');
        const fightButton = document.getElementsByClassName('fight')[0];
        fightButton.classList.remove('hidden');
       
        let unit1Container = document.createElement('div');

        document.getElementsByClassName('battle-field')[0].appendChild(unit1Container);
        let unit1ContainerHealth = document.createElement('div');
        unit1ContainerHealth.id = 'unit1-health';
        unit1Container.appendChild(unit1ContainerHealth);
        unit1ContainerHealth.innerHTML = displayObj.game.unit1.health;

        let unit1ContainerBody = document.createElement('div');
        unit1Container.appendChild(unit1ContainerBody);
        unit1ContainerBody.innerHTML = `Name: ${displayObj.game.unit1.name}`+`<br>`;
        unit1ContainerBody.innerHTML += `Attack Speed: ${displayObj.game.unit1.attackSpeed}`+`<br>`;
        unit1ContainerBody.innerHTML += `Armor: ${displayObj.game.unit1.armor}`+`<br>`;
        unit1ContainerBody.innerHTML += `Power: ${displayObj.game.unit1.power}`+`<br>`;

        let unit2Container = document.createElement('div');

        document.getElementsByClassName('battle-field')[0].appendChild(unit2Container);
        let unit2ContainerHealth = document.createElement('div');
        unit2ContainerHealth.id = 'unit2-health';
        unit2Container.appendChild(unit2ContainerHealth);
        unit2ContainerHealth.innerHTML = displayObj.game.unit2.health;

        let unit2ContainerBody = document.createElement('div');
        unit2Container.appendChild(unit2ContainerBody);
        unit2ContainerBody.innerHTML = `Name: ${displayObj.game.unit2.name}`+`<br>`;
        unit2ContainerBody.innerHTML += `Attack Speed: ${displayObj.game.unit2.attackSpeed}`+`<br>`;
        unit2ContainerBody.innerHTML += `Armor: ${displayObj.game.unit2.armor}`+`<br>`;
        unit2ContainerBody.innerHTML += `Power: ${displayObj.game.unit2.power}`+`<br>`;

        fightButton.addEventListener('click', () => displayObj.fightProcess(displayObj));
    }

    fightProcess(displayObj){
        displayObj.game.fightStep(displayObj);
    }

    renderUnitsHealth(game){
        document.getElementById('unit1-health').innerHTML = game.unit1.health;
        document.getElementById('unit2-health').innerHTML = game.unit2.health;
    }
}

class Game{
    constructor(){
        this.charactersProperties = [
            {name: 'Fenris', health: 100, attackSpeed:1.2, armor:40, power:76},
            {name: 'Yrel', health: 200, attackSpeed:1.4, armor:38, power:86},
            {name: 'Nerzhul', health: 200, attackSpeed:1.3, armor:50, power:86},
            {name: 'Archmage Khadgar', health: 200, attackSpeed:1.5, armor:30, power:99},
            {name: 'Velen', health: 200, attackSpeed:1.7, armor:35, power:96},
            {name: 'Blackhand', health: 200, attackSpeed:1.1, armor:39, power:88},
            {name: 'Vindicator Maraad', health: 200, attackSpeed:1.7, armor:44, power:77},
            {name: 'Kilrogg Deadeye', health: 200, attackSpeed:1.6, armor:49, power:876}
        ];
    }

    createUnitByCharacterId(characterId){
        const characterProperties = this.charactersProperties[characterId];
        this.unit1 = new Unit(
            characterId,
            characterProperties.name,
            characterProperties.health,
            characterProperties.attackSpeed,
            characterProperties.armor,
            characterProperties.power
        );

        let characterId2;
        function chooseCharacter2(){
            characterId2 = Math.floor(Math.random() * 8);
            if(characterId === characterId2){
                characterId2 = Math.floor(Math.random() * 8);
                chooseCharacter2();
            }
        }
        chooseCharacter2();

        const characterProperties2 = this.charactersProperties[characterId2];
        this.unit2 = new Unit(
            characterId2,
            characterProperties2.name,
            characterProperties2.health,
            characterProperties2.attackSpeed,
            characterProperties2.armor,
            characterProperties2.power
        );
    }
    
    getCharactersProperties(){
        return this.charactersProperties;
    }

    fightStep(displayObject){
        const game = displayObject.game;

        game.unit1.receiveKick(game.unit2.attackSpeed, game.unit2.power);
        game.unit2.receiveKick(game.unit1.attackSpeed, game.unit1.power);

        if (game.unit1.health <= 0 || game.unit2.health <= 0) {
            const winnerName = game.unit1.health < game.unit2.health ? game.unit2.name : game.unit1.name;

            if (game.unit1.health < 0) {
                game.unit1.health = 0;   
            }

            if (game.unit2.health < 0) {
                game.unit2.health = 0;   
            }

            displayObject.renderUnitsHealth(game);
            
            setTimeout(() => {
                alert(winnerName);
                window.location.reload();
            }, 500);
        } else {
            displayObject.renderUnitsHealth(game);
            displayObject.game = game;
            setTimeout(() => game.fightStep(displayObject), 1000);
        }
    }
}

class Unit{
    constructor(id, name, health, attackSpeed, armor, power){
        this.id = id;
        this.name = name;
        this.health = health;
        this.attackSpeed = attackSpeed;
        this.armor = armor;
        this.power = power;
    }
    
    receiveKick(attackSpeed, power) {
        this.health = this.health - (power / attackSpeed - this.armor);
        this.health = Math.round(this.health);
    }
}

let game = new Game();
let display = new Display(game);

display.start();


