let uName = document.getElementById('felName')
let id = document.getElementById('feId')
let feedback = document.getElementById('feedback')
let btn = document.getElementById('submit')

const alcEnd = "http://localhost:3000/feedbacks"


/* addData function */
const addData = (e) => {
    e.preventDefault();

    if(!uName.value || !id.value || !feedback.value){
        alert('please fill in all fields')
        return;
    }

    const dataObj = {
        username: uName.value ,
        id: id.value,
        text: feedback.value
    }

    fetch(alcEnd, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    })

    /* alert('Thank you for your response'); */

    location.href = "/Feedback/build/displayFeedback.html"

    uName.value = '';
    id.value = '';
    feedback.value = '';

    console.log(dataObj)
}

btn.addEventListener('click', addData)





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