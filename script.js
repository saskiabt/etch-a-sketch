
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
const gridButton = document.querySelector("#grid-button"); 

let colorChoice = "black"; 

let r; 
let g; 
let b; 
let rgb = `rgb(${r},${g},${b})`; 

let gridBorder = document.createElement('style'); 
gridBorder.innerHTML = `
    .squares-container > div {
        border-top: .01px solid rgba(173, 172, 172, 0.212);
        border-right: .01px solid rgba(173, 172, 172, 0.212);
        border-left: .01px solid rgba(173, 172, 172, 0.212);
        border-bottom: .01px solid rgba(173, 172, 172, 0.212);
    }
`


// creates a grid with X by X number of squares and x by x number of columns and rows 
function createSquares(x) { 
    let num = x**2
    for (let i=1; i<(num)+1; i++ ) {
        let gridSquare = document.createElement('div'); 
            gridSquare.setAttribute("id", `Square${i}`); 
            gridSquare.classList.add('gridSquare'); 
            squaresContainer.appendChild(gridSquare);
        

    }

    let gridSizeStyle = document.createElement('style'); 
    gridSizeStyle.innerHTML = `
        .squares-container { 
            grid-template-columns: repeat(${x}, 1fr);
            grid-template-rows: repeat(${x}, 1fr);
        }
    `; 
    squaresContainer.appendChild(gridSizeStyle);
    
    for(i=0; i<squares.length; i++) { 
        squares[i].appendChild(gridBorder)
    }
}

// removes all children w the given CSS selector (class or id) from the parent node 
function removeChildren(cssSelector, parentNode){
    var elements = parentNode.querySelectorAll(cssSelector);
    let fragment = document.createDocumentFragment(); 
    fragment.textContent=' ';
    fragment.firstChild.replaceWith(...elements);
}


// adds hover class to elements
function hover(element, enter, leave) { 
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave',leave)
}

//picks a random number inclusive of min and max, to be used to pick r, g, and b values 
function getRandomInt(min,max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

// adds permahover class when mouse passes through grid square 
function startDraw() { 
    for (let i=0; i<squares.length; i++) { 
        squares[i].removeAttribute('class'); 
        squares[i].addEventListener('mouseover', ()=> {
            squares[i].className=`permahover-${colorChoice}`; 
            if (squares[i].className === "permahover-random") { 
                squares[i].style.backgroundColor = `${rgb}`
            }
        });
    }  
} 

//picks a random rgb value and adds event listener to rainbow button to draw in that color on click

function chooseColor() { 
    r = getRandomInt(0,255); 
    g = getRandomInt(0,255); 
    b = getRandomInt(0,255); 

    rgb = `rgb(${r},${g},${b})`

    console.log(`r = ${r}`); 
    console.log(`g = ${g}`); 
    console.log(`b = ${b}`); 
    console.log(rgb);
}; 


// sets permahover class in whichever color user picks 
let drawColor = (colorChoice) => { 
    for (let i=0; i<squares.length; i++) { 
        squares[i].removeAttribute('class'); 
        squares[i].removeAttribute("style"); 
        squares[i].addEventListener('mouseover', ()=> {
            squares[i].removeAttribute("style"); 
            squares[i].className=`permahover-${colorChoice}`;
        });
    }
}


function colorPicker() { 
    blackButton.addEventListener('click', () => {
        colorChoice = "black"; 
        drawColor(colorChoice); 
    }); 

    blueButton.addEventListener('click', () => {
        colorChoice = "blue"; 
        drawColor(colorChoice); 
    }); 

    rainbowButton.addEventListener('click', () => { 
        chooseColor(); 
        colorChoice = "random"
        console.log(rgb); 
        for (let i=0; i<squares.length; i++) { 
            squares[i].removeAttribute('class'); 
            squares[i].removeAttribute("style"); // toggling this on and off will change whether screen clears on each click of rainbow button 
            squares[i].addEventListener('mouseover', ()=> {
                squares[i].classList.add('permahover-random'); 
                squares[i].style.backgroundColor = `${rgb}`; 
            });
        }
    });
}


clearButton.addEventListener('click', () => { 
    for (let i=0; i<squares.length; i++) { 
        squares[i].removeAttribute('class'); 
        squares[i].removeAttribute("style");
    }
})


// gridButton.addEventListener('click', () => { 
//    for (let i=0; i<squares.length; i++) {
//     squares[i].removeAttribute("style"); 
//    }

//    let gridDivs = document.querySelectorAll('.squares-container > div')
//    let gridDivs_array = [...gridDivs]; 
//    gridDivs_array.forEach(div => {
//        div.removeAttribute('style');
//    })


// }); 


let runGame = () => { 
    createSquares(40); 
    startDraw(); 
   

    lengthInput.addEventListener('input', () => {
        removeChildren('div', squaresContainer); // this is what's removing the colored class and switching it back to black on change of dimensions input 
            
        lengthOutput.textContent= `${lengthInput.value} x ${lengthInput.value}`;
        console.log(lengthInput.value); 

        createSquares(lengthInput.value);


        startDraw();
        colorPicker(); 
            
    });
        
};

runGame(); 
colorPicker(); 

