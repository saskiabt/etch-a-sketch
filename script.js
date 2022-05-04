
// Global Variables 
let content= document.getElementById('content'); 
let squaresContainer = document.querySelector('.squares-container')
let buttonContainer = document.getElementById('buttonContainer')
let squares = squaresContainer.children
    console.log(squares); 
let inputBox = document.querySelector('.input-box'); 
let sliderBox = document.querySelector('#slider-box'); 
let lengthInput = document.querySelector("#lengthInput")
let inputLabel = document.getElementById('input-label'); 
let lengthOutput = document.querySelector('.length-output')
const blueButton = document.querySelector('#blue-button'); 
const blackButton = document.querySelector('#black-button');  
const rainbowButton = document.getElementById('rainbow-button'); 
const clearButton = document.getElementById('clear-button'); 
let colorChoice = "black"; 



// creates a grid with X by X dimensions 
function createSquares(x) { 
    let num = x**2
    for (let i=1; i<(num)+1; i++ ) {
        let gridSquare = document.createElement('div'); 
            gridSquare.setAttribute("id", `Square${i}`); 
            gridSquare.classList.add('gridSquare'); 
            squaresContainer.appendChild(gridSquare);
        

    }
}

// removes all children w the given CSS selector (class or id) from the parent node 
function removeChildren(cssSelector, parentNode){
    var elements = parentNode.querySelectorAll(cssSelector);
    let fragment = document.createDocumentFragment(); 
    fragment.textContent=' ';
    fragment.firstChild.replaceWith(...elements);
}

// formats grid to have *length* # of columns and *length* # of rows inside squares container 
function sizeGrid(length) { 
    let gridSizeStyle = document.createElement('style'); 
    gridSizeStyle.innerHTML = `
        .squares-container { 
            grid-template-columns: repeat(${length}, 1fr);
            grid-template-rows: repeat(${length}, 1fr);
        }
    `; 
    squaresContainer.appendChild(gridSizeStyle);
}

// adds hover class to elements
function hover(element, enter, leave) { 
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave',leave)
}

// adds permahover class when mouse passes through grid square 
function startDraw() { 
    for (let i=0; i<squares.length; i++) { 
        squares[i].removeAttribute('class'); 
        squares[i].addEventListener('mouseover', ()=> {
            squares[i].classList.add(`permahover-${colorChoice}`);
        });
    }  
} 


let runGame = () => { 
    createSquares(60); 
    sizeGrid(60); 
    startDraw(); 

    lengthInput.addEventListener('input', () => { 
        removeChildren('.gridSquare', squaresContainer);
            
        lengthOutput.textContent= `${lengthInput.value} x ${lengthInput.value}`;
        console.log(lengthInput.value); 

        createSquares(lengthInput.value);

        sizeGrid(lengthInput.value); 

        startDraw();
    });
        
};

runGame(); 

// sets permahover class in whichever color user picks 
let drawColor = (colorChoice) => { 
    for (let i=0; i<squares.length; i++) { 
        squares[i].removeAttribute('class'); 
        squares[i].addEventListener('mouseover', ()=> {
            squares[i].className(`permahover-${colorChoice}`);
        });
    }
}

 blueButton.addEventListener('click', () => {
     colorChoice = "blue"; 
     drawColor(colorChoice); 
 }); 

blackButton.addEventListener('click', () => {
    colorChoice = "black"; 
    drawColor(colorChoice); 
}); 


