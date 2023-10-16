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
    carImage.src = bmw.image

    const yearsProducedElement = document.getElementById('model-year')
    const horsepowerElement = document.getElementById('model-horsepower')
    const torqueElement = document.getElementById('model-torque')

    yearsProducedElement.textContent = bmw.years_produced 
    horsepowerElement.textContent = bmw.horsepower
    torqueElement.textContent = bmw.torque
    
    
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