let tbody = document.querySelector('tbody');


const drop = () => {
    const alcEnd = "http://localhost:3000/about"

    fetch(alcEnd)
        .then(res => res.json())
        .then(data => {
            data.map(about => {
                tbody.insertAdjacentHTML('beforeend', `<tr>
        <td class='px-6 py-4 whitespace-nowrap'>${about.id}</td>
        <td class='px-6 py-4 whitespace-nowrap'>${about.text}</td>
    </tr>`)
            })
        })
}

document.addEventListener('DOMContentLoaded', drop)