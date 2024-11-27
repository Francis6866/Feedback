let uName = document.getElementById('felName')
let id = document.getElementById('feId')
let feedback = document.getElementById('feedback')
let tbody = document.querySelector('tbody')
let btn = document.getElementById('submit')


/* addData function */
const addData = (e) => {
    e.preventDefault();

    if(!uName.value || !id.value || !feedback.value){
        alert('please fill in all fields')
        return;
    }

    tbody.innerHTML += `
    <tr>
        <td class='border-4 border-green-900'>${uName.value}</td>
        <td class='border-4 border-green-900'>${id.value}</td>
        <td class='border-4 border-green-900'>${feedback.value}</td>
    </tr>`
    
    uName.value = '';
    id.value = '';
    feedback.value = '';
}

btn.addEventListener('click', addData)