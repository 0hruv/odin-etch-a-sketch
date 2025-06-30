let container = document.querySelector(".container");
let forCenter = document.querySelector(".forCenter");

buttonChangesSize();


function buttonChangesSize()
{
    let sizeButton = document.querySelector(".header button")
    sizeButton.addEventListener("click",() => {
        
        let size;
        do{
                size = Number(prompt("Dimension of grid in squares(1-100)"));
        }while(isNaN(size) || size < 1 || size > 100 );
        
        sizeButton.textContent = "Click this button to change number of squares";
        
        removeGrid();
        createGrid(size); 
    })
}


function createGrid(size)
{
    for (let j = 0 ; j  < size ; j++)
    {
        let x = (360/size) + "px";
        let row = document.createElement("div");
        row.className = "row";
        row.setAttribute("style",`height:${x}`);

        for (let i = 0 ; i < size ; i++)
        {
            let box = document.createElement("div");
            box.className = "box";

                box.setAttribute("style",`width:${x}`,`height:${x}`);
                box.addEventListener("mouseenter",() =>{

                    if (box.className == "box")
                    {

                    box.className = "newbox";

                    let randomColour = Math.floor(Math.random()*16777215);
                    let hexString = "#" + randomColour.toString(16);
                    
                    box.style.backgroundColor = `${hexString}`;
                        
                    }
                
                })
            
            
            row.appendChild(box);
        }

        container.appendChild(row);
        
    }
}

function removeGrid()
{
    container.remove();
    container = document.createElement("div");
    forCenter.appendChild(container);
}