
let content= document.getElementById('content'); 
let box = document.createElement('div'); 
content.appendChild(box);

let squaresContainer = document.createElement('div'); 
box.appendChild(squaresContainer); 
squaresContainer.classList.add('squaresContainer'); 


function createSquares(num) { 

    for (let i=1; i<num+1; i++ ) {
        let gridSquare = document.createElement('div'); 
        gridSquare.setAttribute("id", `Square${i}`); 
        gridSquare.classList.add('gridSquare'); 
        squaresContainer.appendChild(gridSquare); 
        // gridSquare.textContent= `${i}`; 
    }

   
}

createSquares(256); 

function colorOnHover() { 
    let gridSquares= document.querySelectorAll('.gridSquare'); 

    gridSquares.addEventListener('click', () => { 
        gridSquares.classList.add('draw'); 

        gridSquares.addEventListener('hover', () => { 
            gridSquares.classList.add('draw'); 
            
        });

    }); 
}



