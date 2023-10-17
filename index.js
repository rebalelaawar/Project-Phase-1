fetch('http://localhost:3000/model')
.then(resp => resp.json())
.then(cars => {
    addCarImage(cars[0])

    cars.forEach(car => {
        addModelNamesToList(car)

    })
})


function addModelNamesToList(bmw){
    const createList = document.createElement("h5")
    createList.textContent = bmw.name
    createList.addEventListener('click', () => {
        addCarImage(bmw)
    })

    const modelList = document.querySelector(".model-list")
    modelList.append(createList)
    
}

function addCarImage(bmw){
    const carImage = document.getElementById("details-image")
    let temp = 0
    carImage.src = bmw.image[temp]


    document.addEventListener('keydown', (event) => {
        if (event.key === "ArrowRight") {
            if (temp >= bmw.image.length-1) {
                temp = -1
            }
            temp++
            carImage.src = bmw.image[temp]
        }

        if (event.key === "ArrowLeft") {
            if (temp <= 0) {
                temp = bmw.image.length
            }
            temp--
            carImage.src = bmw.image[temp]
        }
    })

    const yearsProducedElement = document.getElementById('model-year')
    const horsepowerElement = document.getElementById('model-horsepower')
    const torqueElement = document.getElementById('model-torque')
    const modelNameElement = document.getElementById('model-name')

    yearsProducedElement.textContent = bmw.years_produced 
    horsepowerElement.textContent = bmw.horsepower
    torqueElement.textContent = bmw.torque
    modelNameElement.textContent = bmw.name
    

    }

const commentForm = document.getElementById('comments-form')

commentForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const commentInput = document.getElementById('comment-input').value
    const detailSection = document.getElementById('detail-comment-section')

    const newComment = document.createElement('p');
    newComment.textContent = commentInput;


    detailSection.appendChild(newComment)
    commentForm.reset()

})



