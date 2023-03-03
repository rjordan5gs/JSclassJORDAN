const CHAR_SELECT = document.getElementById('characters')
const FORM = document.getElementById('form-input')
const OUTPUT_DIV = document.getElementById('output')

const updateDOM = (input) => {
    const p = document.createElement('p')
    p.textContent = input
    OUTPUT_DIV.appendChild(p)
}

const warriorCharacter = {
    class: 'Warrior',
    level: 1,
    weapons: ['Bastard Sword', 'Axe' , 'Fists'],
    Stats: {
        Strength: '10',
        Dexterity: '8',
        Agility:'4',
        Intellegence:'2'
    },
    myCharacter: function() {
        return `You have chosen ${this.class}, your weapon of choice is ${this.weapons[0]}.`
    }
}

const rangerCharacter = {
    class: 'Ranger',
    level: 1,
    weapons: ['Long Bow', 'Long Sword' , 'Dagger'],
    Stats: {
        Strength: '7',
        Dexterity: '5',
        Agility:'10',
        Intellegence:'6'
    },
    myCharacter: function() {
        return `You have chosen ${this.class}, your weapon of choice is ${this.weapons[0]}.`
    }
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault()
    const selectedCharacter = CHAR_SELECT.value
    let character

    if (selectedCharacter === 'Warrior') {
        character = warriorCharacter
    } else if (selectedCharacter === 'Ranger') {
        character = rangerCharacter
    }

    if (character) {
        const characterInfo = character.myCharacter()
        updateDOM(characterInfo)
    }
})