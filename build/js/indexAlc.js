let userName = document.getElementById('felName');
let id = document.getElementById('feId');
let text = document.getElementById('aboutAlc');
let btn = document.getElementById('submit');

const alcEnd = "http://localhost:3000/about"

const handleSubmit = (e) => {
    e.preventDefault()

    if(!userName.value || !id.value || !text.value){
        alert('please fill in all fields')
        return;
    }

    const dataObj = {
        username: userName.value,
        id: id.value,
        text: text.value
    }

    fetch(alcEnd, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    })

    /* alert('Thank you for your response'); */

    location.href = "/Feedback/build/displayAlc.html"
    

    userName.value = '';
    id.value = '';
    text.value = '';

    console.log(dataObj)
}


/* const handleSubmit = (e) => {
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
    
} */


btn.addEventListener('click', handleSubmit)