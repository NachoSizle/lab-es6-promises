// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// function getInstruction(food, step, callback, errorCallback)

const food = "mashedPotatoes";
const step = 0;

// function addStep (step) {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
// };

const addStep = (step) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
}

function showError (error) {
  console.log(error);
}

const showFinalInstruction = (step) => {
  addStep(step)
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}

  // getInstruction("mashedPotatoes", 0, addStep, showError);
  
  // getInstruction("mashedPotatoes", 1, addStep, showError);
  
  // getInstruction("mashedPotatoes", 2, addStep, showError);
  
  // getInstruction("mashedPotatoes", 3, addStep, showError);
  
  // getInstruction("mashedPotatoes", 4, showFinalInstruction, showError);

  function showFiveStep() {
    getInstruction("mashedPotatoes", 4, showFinalInstruction, showError);
  }

  function showFourthStep() {
    getInstruction("mashedPotatoes", 3, (step) => {
      addStep(step)
      showFiveStep()
    }, showError);
  }

  function showThirdStep() {
    getInstruction("mashedPotatoes", 2, (step) => {
      addStep(step)
      showFourthStep()
    }, showError);
  }


  function showSecondStep() {
    getInstruction("mashedPotatoes", 1, (step) => {
      addStep(step)
      showThirdStep()
    }, showError);
  }

// Iteration 1 - using callbacks
// ...
  function showFirstStep() {
    getInstruction("mashedPotatoes", 0, (step) => {
      addStep(step)
      showSecondStep()
    }, showError);
  }

  getInstruction("mashedPotatoes", 0, (step) => {
    addStep(step)
    getInstruction("mashedPotatoes", 1, (step) => {
      addStep(step)
      getInstruction("mashedPotatoes", 2, (step) => {
        addStep(step)
        getInstruction("mashedPotatoes", 3, (step) => {
          addStep(step)
          getInstruction("mashedPotatoes", 4, showFinalInstruction, showError);
        }, showError);
      }, showError);
    }, showError);
  }, showError);



// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...