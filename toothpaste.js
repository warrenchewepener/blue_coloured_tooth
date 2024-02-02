//const number of teeth;
//const candy;
//const candy_red

const number_of_teeth = 30;
const candy = "Coca Cola";
const candy_red = "kit Kats" 

if (number_of_teeth >= 40 ) {
  console.log(`Mr Glowworm has a rack of teeth`);
  
} else {
  console.log(`Mr Glowworm should grow up and stop drinking ${candy} and ${candy_red} or his
teeth will rot`) 
   
}   

const fillings = 7;

let toothpaste;
if(fillings < 7) {
  toothpaste = `Mr Glowworm should be carefull that his fillings dont fall out!`
} else {
  toothpaste = `Mr Glowworm has a lot of teeth `
}

console.log(toothpaste);

// Molar Mass of Calcium = 40.078g/mol
// Molar Mass of Fluorine = 18.998g/mol 
// Molar Mass of Sodium = 22.990g/mol  
// Avogadros Number = 6.02 X 10 **23
// Molar mass of Elements = molar Mass of Element g/mol / Avogadros Number 
// Mass of one atom of Calcium (Ca)
// Mass of one atom of Fluorine (F)
// Mass of one atom of Sodium (Na)

const molar_mass_of_calcium = 40.078;
const molar_mass_of_fluorine = 18.998;
const molar_mass_of_sodium = 22.990;
const avogadros_number = 6.02 * 10 ** 23;


mass_of_one_atom_of_calcium = ( molar_mass_of_calcium /avogadros_number);
mass_of_one_atom_of_fluorine = (molar_mass_of_fluorine / avogadros_number);
mass_of_one_atom_of_sodium = (molar_mass_of_sodium / avogadros_number);

const symbol_of_calcium = "Ca";
const symbol_of_fluorine = "F"; 
const symbol_of_sodium = "Na"; 

console.log(mass_of_one_atom_of_calcium,mass_of_one_atom_of_fluorine,mass_of_one_atom_of_sodium) 

const chemicals_one = 7 * 10 **-23;
const chemicals_two = 3 * 10 **-23;
const chemicals_three = 4 * 10 **-23;

let elements;
if(chemicals_one >= 7) {
  elements = `With so much Calcium of ${molar_mass_of_calcium} grams who needs a toothbrush!`
  
} else {
  elements = `With so little Fluorine of ${molar_mass_of_fluorine} grams you definetely want to use\n\
your toothbrush!`
}  

console.log(elements)

let elements_two;
if (chemicals_two >= 10)  {
  elements_two = `The Periodic Symbol for Calcium is ${symbol_of_calcium}`

} else {
  elements_two = `The Periodic Symbol for Fluorine is ${symbol_of_fluorine}`
}

console.log(elements_two);

let elements_three;
if (chemicals_three <= 5) {
  elements_three = `The chemical composition of toothpaste has the symbol ${symbol_of_sodium}`
} else {
  elements_three = `Toothpaste has ${molar_mass_of_sodium} grams in it`
}     

console.log(elements_three);



