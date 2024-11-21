const apiURL = 'https://place.dog/300/200';
let currentPage = 1;

async function fetchData(page) {
    try {
        const response = await fetch('${apiUrl}?page=${page}');
        if (!response.ok) throw new Error('Error: ${response.status');
        const data = await response.json();
        displayData(data);

    } catch (error) {
        console.error(error);
    }
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item.name;
        container.appendChild(div);
    });
}

document.getElementById('prev-btn').addEventListener('click', () =>{
    if (currentPage > 1) fetchData(--currentPage);
});

document.getElementById('next-btn').addEventListener('click', () => {
    fetchData(++currentPage);
});

fetchData(currentPage);