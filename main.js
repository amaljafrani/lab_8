/* Zoo Animal Constructors */

function panda(name, age) {
    this.name = name;
    this.age = age;
    this.image = "https://static.thenounproject.com/png/78948-200.png";
    this.image_alt = "A black and white panda";
}

function crocodile(name, age) {
    this.name = name;
    this.age = age;
    this.image = "https://static.thenounproject.com/png/549931-200.png";
    this.image_alt = "A wily crocodile";
}

function peacock(name, age) {
    this.name = name;
    this.age = age;
    this.image = "https://static.thenounproject.com/png/521704-200.png";
    this.image_alt = "A proud peacock";
}

/* Global Variables */

let zooAnimals = [new panda(), new crocodile(), new peacock()];
let names = ["Padme", "Anakin", "Obi-Wan", "Ahsoka", "Darth Maul", "Mace Windu", "Yoda", "Palpatine", "Rex"];

/* Functions */

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let randomIndex = getRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    return getRandomIndex(10);
}

function generateRandomAnimal() {
    let randomIndex = getRandomIndex(zooAnimals.length);
    let randomAnimal = zooAnimals[randomIndex];

    if (randomAnimal instanceof panda) {
        return new panda(generateRandomName(), generateRandomAge());
    }

    else if (randomAnimal instanceof crocodile) {
        return new crocodile(generateRandomName(), generateRandomAge());
    }

    else if (randomAnimal instanceof peacock) {
        return new peacock(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
 var animal = JSON.parse(localStorage.getItem("savedAnimal"));
var hasSavedAnimal = 0;

  //check if the saved animal exists in local storage
  if (animal === null) 
  {
    document.getElementById("button-save").textContent = "Save Animal";
    animal = generateRandomAnimal();
  } 
  else 
  {
    document.getElementById("button-save").textContent = "Clear Animal";
    hasSavedAnimal = hasSavedAnimal + 1;
  }

  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);


  document.getElementById("button-save").addEventListener("click", function() {
    //when we are clearing the animal
    if (hasSavedAnimal > 5) 
    {
      localStorage.removeItem("savedAnimal");

      document.getElementById("button-save").style.display = "none";
      document.getElementById("button-action-text").textContent = "Cleared!";
      document.getElementById("button-action-text").style.display = "block";
    }
    //when we are saving the animal
    else 
    {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));
      document.getElementById("button-save").style.display = "none";
      document.getElementById("button-action-text").textContent = "Saved!";
      document.getElementById("button-action-text").style.display = "block";
    }
  });

};