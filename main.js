document.querySelectorAll('form button')[0].addEventListener('click', calculateSalary);

let tableBody = document.querySelector("#tableBody");

function calculateSalary(){

    /* Getting form Data */
    let name = document.getElementById('name').value;
    let basic = document.getElementById('basic').value;
    let bonus = document.getElementById('bonus').value;
    let Penalty = document.getElementById('Penalty').value;
    let extra = document.getElementById('extra').value;
    let jobTitle = document.getElementById('jobTitle').value;

    /* Calculating Salary */
    let monthHours = totalMonthlyHours(8, 5, 4);
    let hour = hourlyRate(basic, monthHours);
    let extraV = extraValue(extra, hour, jobTitle);
    let gross = grossSalary(basic, bonus, Penalty, extraV);
    let tax = taxValue(gross, 0.22);
    let net = netSalary(gross, tax);

    /* Displaying Results */    
let rowData = `
<td>${name}</td>
<td>${basic}</td>
<td>${bonus}</td>
<td>${Penalty}</td>
<td>${extra}</td>
<td>${hour}</td>
<td>${extraV}</td>
<td>${gross}</td>
<td>20%</td>
<td>${tax}</td>
<td>${net}</td>
<td>
<button type="button" class="btn btndanger deletebtn">Delete</button>
</td>
`;
  
    if(localStorage.getItem('show') == null){//ma3ndesh label 3la l key fa  3ayza a3raf eh ely gowa lkey
        localStorage.setItem('show', '');
    }

    let myData = localStorage.getItem('show').split('-');//split for 3ard ely gowa localstorge (elvalue)
    myData.push(rowData); //row data fel makhzan

    localStorage.setItem('show', myData.join('-')); //join strings together //7efz ely gowa l key ka string 3lshan local storage store string only

    showData();
}

function showData(){
    //3andy label 3la elkeys

    if(localStorage.getItem('show') != null){ //show is the key(label) that store values make sure eno maawgod alshan a3raf eh ely gowa el key

        let data = localStorage.getItem('show').split('-'); //to loop on it do split

        tableBody.innerHTML = '';

        data.forEach(rowData => {

            if(rowData.trim() !== ''){

                let row = document.createElement('tr'); //html dom
                row.innerHTML = rowData;

                tableBody.appendChild(row); //create data IN TABLE

            }

        });

    }

}

tableBody.addEventListener("click", function(e){

    if(e.target.classList.contains("deletebtn")){

        let row = e.target.closest("tr");
        let index = row.rowIndex - 1;

        row.remove();

        let data = localStorage.getItem('show').split('-');
        data.splice(index,1);

        localStorage.setItem('show', data.join('-'));
    }

});

function clearEmployees(){

    localStorage.removeItem('show');
    showData();

}

showData();
/*
let show = [
    `
    <td>Ali</td>
    <td>5000</td>
    <td>500</td>
    <td>200</td>
    <td>7</td>
    <td>20</td>
    <td>140</td>
    <td>6000</td>
    <td>20%</td>
    <td>560</td>
    <td>4000</td>
    `,
    `
    <td>Ali</td>
    <td>5000</td>
    <td>500</td>
    <td>200</td>
    <td>7</td>
    <td>20</td>
    <td>140</td>
    <td>6000</td>
    <td>20%</td>
    <td>560</td>
    <td>4000</td>
    `,
    `
    <td>Ali</td>
    <td>5000</td>
    <td>500</td>
    <td>200</td>
    <td>7</td>
    <td>20</td>
    <td>140</td>
    <td>6000</td>
    <td>20%</td>
    <td>560</td>
    <td>4000</td>
    `,
].join('-');
localStorage.setItem('show', show);
*/
