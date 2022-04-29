
let content= document.getElementById('content'); 
let squaresContainer = document.querySelector('.squares-container')
let buttonContainer = document.getElementById('buttonContainer')
let squares = squaresContainer.children
console.log(squares); 



function createSquares(x) { 
    let num = x**2
    for (let i=1; i<(num)+1; i++ ) {
        let gridSquare = document.createElement('div'); 
            gridSquare.setAttribute("id", `Square${i}`); 
            gridSquare.classList.add('gridSquare'); 
            squaresContainer.appendChild(gridSquare);
        

    }
}

function removeChildren(cssSelector, parentNode){
    var elements = parentNode.querySelectorAll(cssSelector);
    let fragment = document.createDocumentFragment(); 
    fragment.textContent=' ';
    fragment.firstChild.replaceWith(...elements);
}

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


let xyInput = () => { 
    let inputButton = document.querySelector('.dimensions-button'); 

    inputButton.addEventListener('click', () => { 

        inputButton.remove(); 
    // create input slider with a min of 10, max 100, and interval of 10
        let inputBox = document.createElement('div'); 
            buttonContainer.appendChild(inputBox); 
            inputBox.classList.add('input-box'); 
        
        let inputPrompt = document.createElement('div')
            inputPrompt.classList.add('input-prompt'); 
            inputPrompt.textContent = "Please enter desired grid dimensions:"
            inputBox.appendChild(inputPrompt); 

        let lengthInput = document.createElement('INPUT'); 
            inputBox.appendChild(lengthInput); 
            lengthInput.setAttribute('type', "range");
            lengthInput.setAttribute('name', "lengthInput");
            lengthInput.setAttribute('id', "lengthInput");  
            lengthInput.setAttribute('min', "0");
            lengthInput.setAttribute('max', "100"); 
            lengthInput.setAttribute('step', "10");
            lengthInput.setAttribute('value', "0");
            
        let inputLabel = document.createElement('label')
            inputLabel.setAttribute("for", "lengthInput"); 

        let lengthOutput = document.createElement('div'); 
            lengthOutput.classList.add('length-output'); 
            buttonContainer.appendChild(lengthOutput)
            lengthOutput.textContent= lengthInput.value
    
    // when a dimension is inputted, create grid square divs and create grid layout to hold them in amt inputted
        lengthInput.addEventListener('input', () => { 
            removeChildren('.gridSquare', squaresContainer);
            
            lengthOutput.textContent= `${lengthInput.value} x ${lengthInput.value}`;
            console.log(lengthInput.value); 

            createSquares(lengthInput.value);

            sizeGrid(lengthInput.value); 
         
        }); 

    });
        
};

xyInput(); 

// function startDraw() { 
//     squaresContainer.addEventListener('dblclick', () => { 
//         for (let i=0; i<squares.length; i++) { 
//             squares[i].addEventListener('mouseover', () => {
//                 squares[i].classList.add('permahover'); 
//             }); 
//         }
//     });
// }

// function endDraw() { 

// }

function draw() { 
    squaresContainer.addEventListener('click', () => { 
        for (let i=0; i<squares.length; i++) { 
            squares[i].addEventListener('mouseover', ()=> {
                squares[i].classList.add('permahover'); 
                
                squaresContainer.addEventListener('click', () => { 
                    squares[i].classList.remove('permahover')
                })
            }); 
        }
    });
}


draw(); 






// next thing to do is to make it so the computer starts drawing on click, keeps drawing on hover, and stops drawing on click!


