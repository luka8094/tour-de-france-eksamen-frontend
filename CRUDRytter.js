//individuelle form elementer fra ryttere.html
const createFormHTMLElement = document.getElementById("create-form")
const editFormHTMLElement = document.getElementById("edit-form")
const deletFormHTMLElement = document.getElementById("delete-form")

//De respektive metode kald, der udføres når man trykker
//på en pågældende knap til en formula (oprette, opdatere, eller slette)

//opret en rytter
function createRider(){
    let createRiderData = []
    const options = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createRiderData)
    }

    fetch(URL+"/api/riders",options)
    .then()
    .then()    
}

//opdatere en rytter
function editRider(){
    let editRiderID = 0
    let editRiderData = [] 
    const options = {
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editRiderData)
    }

    fetch(URL+"/api/riders/"+editRiderID ,options)
    .then()
    .then()    
}

//slet en rytter
function deleteRider(){
    let deleteRiderID = 0
    const options = {
        method : 'DELETE',
        headers : {
            'Content-Type': 'application/json'
        }
    }

    fetch(URL+"/api/riders/"+deleteRiderID,options)
    .then()
    .then()        
}