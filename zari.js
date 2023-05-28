// no of marks required calculation  


let first = document.getElementById("firstCont")
let second = document.getElementById("secondCont")
let jariT = document.getElementById("jariType")
let pogulInp = document.getElementById("poguluInput")
let livi = document.getElementById("livillu")
let bells = document.getElementById("bellCountId");
let jariErr = document.getElementById("jariErr")
let bellErr = document.getElementById("bellErr")
let err = document.getElementById("error")
let subBtn = document.getElementById("submitBtn")
let cont = document.getElementById("fullCont")
let spanMrk = document.getElementById("spanMarks")
let spanBill = document.getElementById("spanBillalu")

let finalResult;

let selectedType
jariT.addEventListener("change", function(event) {
    selectedType = event.target.value;
   
})


let selectedLivi
livi.addEventListener("change", function(event) {
    selectedLivi = event.target.value;
  
})

let selectedBells
bells.addEventListener("change", function(event) {
    selectedBells = event.target.value;
 
})

function resultContainerAppending(finalResult, bills) {
  
    let ans = finalResult.toFixed(2)
    console.log(ans)
    let finBill = bills.toFixed(2)

    spanMrk.textContent = ans
    spanMrk.classList.add("span-css")
    spanBill.classList.add("span-css")
    spanBill.textContent = finBill



}



function calculatingvalues() {
    if (jariT.value === "select") {
        jariErr.textContent = "*select Zari type"

    } else {
        jariErr.textContent = ""
    }
    if (pogulInp.value === "") {
        err.textContent = "*Enter number of pogulu"
    } else {
        err.textContent = ""
    }
    if (bells.value === "bellsnum") {
        bellErr.textContent = "*select number of bells"

    } else {
        bellErr.textContent = ""
    }
    let bills
    if (jariT.value !== "select" && bells.value !== "bellsnum" && pogulInp.value !== "") {
        let intBell = parseInt(bells.value);
        let finalPogulu = parseInt(pogulInp.value);
        if (jariT.value === "flora") {
            // 42 is come , how means actually flora jari is for 14 livils with 3 bells so 14*3 gives 42 for 3 bells
            // hence for 2 bells 42 is the whole length remains constant , for 2 bells we divide pogulu by (42/2) 
            finalResult = (finalPogulu / (42 / intBell)) / 4
            bills = finalResult * 4
           
        } else if (jariT.value === "tested") {
          
            // we multipply with 2 in final result because these are gintalu for tested
            if (livi.value === "selectLivi" || livi.value === "18") {
                let rounds = 54;
                finalResult = finalPogulu / (54 / intBell)
                bills = finalResult * 2

            } else if (livi.value === "19") {
                finalResult = finalPogulu / (57 / intBell)
                bills = finalResult * 2
            }

        
        } else if (jariT.value === "german") {
            // we divide with 2 in final result because these are gintalu for german and each mark conatin 4 billalu
            // console.log(livi.value)
            if (livi.value === "selectLivi" || livi.value === "18") {
                finalResult = (finalPogulu / (36 / intBell)) / 2
                bills = finalResult * 4
            } else if (livi.value === "18.5") {
                finalResult = (finalPogulu / (37 / intBell)) / 2;
                bills = finalResult * 4
            } else if (livi.value === "19") {
                finalResult = (finalPogulu / (38 / intBell)) / 2;
                bills = finalResult * 4
            }


        }
        // console.log(finalResult)
        resultContainerAppending(finalResult, bills);
    }

}


subBtn.onclick = function() {
    // reqValues.pogulu = parseInt(pogulInp.value)

    calculatingvalues()


}