let userName = document.getElementById('felName');
let id = document.getElementById('feId');
let text = document.getElementById('aboutAlc');
let tbody = document.querySelector('tbody');
let btn = document.getElementById('submit');


const handleSubmit = (e) => {
    e.preventDefault()

    if(!userName.value || !id.value || !text.value){
        alert('please fill in all fields')
        return;
    }

    tbody.innerHTML += `
    <tr>
        <td class='border-4 border-green-900'>${userName.value}</td>
        <td class='border-4 border-green-900'>${id.value}</td>
        <td class='border-4 border-green-900'>${text.value}</td>
    </tr>`
    
    userName.value = '';
    id.value = '';
    text.value = '';
    
}


btn.addEventListener('click', handleSubmit)