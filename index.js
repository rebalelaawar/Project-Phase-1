fetch("http://localhost:3000/data")
.then(resp => resp.json())
.then(teams => {
    teams.forEach(team => {
        //console.log(team)
        displayNbaTeamsInfo(team)
    });
})

function displayNbaTeamsInfo(bball){
    const fullName = document.createElement("li")
    fullName.textContent = bball.full_name

    const grabH1 = document.getElementById("myHeader")
    grabH1.appendChild(fullName)

}

w