console.log("tester script implementation.")

//Et genericCache objekt til at opbevare data fra databasen
function genericCache(){
    //array til at holde på de respektive data objekter
    let allDataObjectsCache = []

    //metoder til at manipulere med data objekterne
    return{     
        //sæt alle objekter til array'en
        setAll : (objects) => allDataObjectsCache = objects,
        //returnere array'en med alle data objekter
        getAll : () => allDataObjectsCache,
        //returnere ét enkelt objekt fra array ved et givent id
        getOne : (id) => allDataObjectsCache.find( obj => id == obj.id ? obj : null),
        //slet ét enkelt objekt fra array med de specifikke id
        deleteOne : (id) => allDataObjectsCache.filter( obj => id == obj.id)
    }
}

const URL = "http://localhost:8080"
const container = document.getElementById("test-container")
const ridersTable = document.getElementById("riders-table")
const teamsContainer = document.getElementById("teams-container")

const localRiderDataCache = genericCache()
const localTeamsDataCache = genericCache()

let testArray = []

fetch(URL+"/api/riders")
.then( response => response.json())
.then(result => {
    localRiderDataCache.setAll(result)
    insertRidersData()
})

function insertRidersData(){
    let localArray = localRiderDataCache.getAll()
    let content = ""
    localArray.forEach( el => content += rowDataBuilder(el))
    ridersTable.innerHTML += content
}

function rowDataBuilder(item){
    console.log(item)
    return `<tr> 
        <td>${item.id}</td> 
        <td>${item.firstName}</td> 
        <td>${item.lastName}</td> 
        <td>${item.country ? item.country : "unknown"}</td> 
        <td>${item.totalPoints ? item.totalPoints : "0"}</td>
        <td></td>
    </tr>`

}

fetch(URL+"/api/teams")
.then(response => response.json())
.then(result => {
    localTeamsDataCache.setAll(result)
    localTeamsDataCache.getAll().forEach(element => console.log(element))
})