const addSqBtn = document.createElement('button')
addSqBtn.textContent = "Add Square";
document.body.appendChild(addSqBtn);

const squareHolder = document.createElement("div");
squareHolder.id = 'square-holder';
document.body.appendChild(squareHolder);

let numSquares = 0;

function addDivBtn() {
    const newDiv = document.createElement('div');
    newDiv.className = "square d-flex flex-row flex-wrap align-items-start";
    numSquares++;
    newDiv.id = numSquares;

    newDiv.addEventListener("mouseover", function () {
        newDiv.textContent = newDiv.id;
    });

    newDiv.addEventListener("mouseout", function () {
        newDiv.textContent = "";
    });

    newDiv.addEventListener("click", function () {
        let randomColor = generateRandomColor();
        newDiv.style.backgroundColor = randomColor;
    });

    newDiv.addEventListener("dblclick", function () {
        if (newDiv.id % 2 === 0) {
            if (newDiv.nextSibling) {
                newDiv.nextSibling.remove();
            } else {
                alert("There is no next sibling!");
            }
        } else {
            if (newDiv.previousSibling) {
                newDiv.previousSibling.remove();
            } else {
                alert("There is no previous sibling!");
            }
        }
    });

    squareHolder.appendChild(newDiv);
};

function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
addSqBtn.addEventListener('click', addDivBtn);
