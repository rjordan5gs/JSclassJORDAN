// global
const CHAR_SELECT = document.getElementById('characters')
const FORM = document.getElementById('form-input')
const OUTPUT_DIV = document.getElementById('output')


// primitives
const strength = 10;
const dexterity = 8;
const agility = 4;
const intelligence = 2;
const warriorWeapons = ['Bastard Sword', 'Axe', 'Fists'];
const rangerWeapons = ['Long Bow', 'Long Sword', 'Dagger'];
// booleans
const isWarrior = true;
const isRanger = false;
// numbers
const warriorLevel = 1;
const rangerLevel = 1;
// arrays
const stats = [strength, dexterity, agility, intelligence];
const characters = ['Warrior', 'Ranger'];
// methods
const myCharacter = function() {
  return `You have chosen ${this.class}, your weapon of choice is ${this.weapons[0]}.`;
}
// functions
const updateDOM = (input) => {
  const p = document.createElement('p')
  p.textContent = input
  OUTPUT_DIV.appendChild(p)
}
// objects
const warriorCharacter = {
  class: 'Warrior',
  level: warriorLevel,
  weapons: warriorWeapons,
  Stats: {
    Strength: strength,
    Dexterity: dexterity,
    Agility: agility,
    Intellegence: intelligence
  },
  myCharacter: myCharacter
}

const rangerCharacter = {
  class: 'Ranger',
  level: rangerLevel,
  weapons: rangerWeapons,
  Stats: {
    Strength: 7,
    Dexterity: 5,
    Agility: 10,
    Intellegence: 6
  },
  myCharacter: myCharacter
}
// event listener
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