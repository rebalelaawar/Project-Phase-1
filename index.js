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
    const modelList = document.querySelector(".model-list")
    modelList.append(createList)
    
}

function addCarImage(bmw){
    const carImage = document.getElementById("details-image")
    carImage.src = bmw.image

    const yearsProducedElement = document.getElementById
}