  let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delbtn = document.getElementById("del-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if(leadsFromLocalStorage){
        myLeads = leadsFromLocalStorage
        renderLeads()
}
delbtn.addEventListener("dblclick", () => {
                localStorage.clear()
                myLeads = []
                renderLeads()
        })

inputBtn.addEventListener("click", () => {
                myLeads.push(inputEl.value)
                inputEl.value = ""
                localStorage.setItem("myLeads", JSON.stringify(myLeads))
                renderLeads()
        })

 function renderLeads(){

 let listItems = ""
        for(let i = 0; i < myLeads.length; i++){
        listItems +=`
         <li>
         <a target = '_blank' href='${myLeads[i]}'>
           ${myLeads[i] } 
           </a>
           </li>`
        }
ulEl.innerHTML = listItems
   }