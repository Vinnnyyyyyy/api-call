
const API_URL = 'https://dog.ceo/api/breeds/image/random/10'; 
let currentPage = 1; 

async function fetchAnimalImages() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    displayImages(data.message);
  } catch (error) {
    console.error(error);
    document.getElementById('image-container').innerHTML = `<p>Failed to load images. Please try again later.</p>`;
  }
}

function displayImages(images) {
  const container = document.getElementById('image-container');
  container.innerHTML = ''; 
  images.forEach(imgUrl => {
    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    imgElement.alt = 'Animal Image';
    container.appendChild(imgElement);
  });
}

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchAnimalImages();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentPage++;
  fetchAnimalImages();
});


fetchAnimalImages();