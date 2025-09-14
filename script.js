// Get elements
const mainHeart = document.getElementById('main-heart');
const flowersContainer = document.getElementById('flowers-container');

// Name to display (you can change this to any name)
const displayName = "I ❤️ MyraJoy Wambui 😘";

// Flower types (Font Awesome icons)
const flowerTypes = [
    'fas fa-heart', 
    'fas fa-certificate',
    'fas fa-star',
    'fas fa-circle',
    'fas fa-square'
];

// Colors for flowers and names
const colors = ['#d64161', '#ff6b6b', '#ff9c9c', '#ff4d4d', '#ffafbd', '#ff7e6b'];

// Create flowers with name
function createFlowers() {
    // Add pulse effect to heart
    mainHeart.classList.add('clicked');
    setTimeout(() => {
        mainHeart.classList.remove('clicked');
    }, 500);
    
    // Create multiple flowers
    for (let i = 0; i < 12; i++) {
        createFlowerWithName(i);
    }
}

function createFlowerWithName(index) {
    // Create flower element
    const flower = document.createElement('div');
    flower.classList.add('flower');
    
    // Random flower type
    const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    flower.innerHTML = `<i class="${flowerType}"></i>`;
    
    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    flower.style.color = color;
    
    // Random position and animation values
    const tx = (Math.random() - 0.5) * 600; // translateX
    const ty = (Math.random() - 0.5) * 600; // translateY
    const r = (Math.random() - 0.5) * 720; // rotation
    const delay = index * 0.1; // stagger animation
    
    // Set custom properties for animation
    flower.style.setProperty('--tx', `${tx}px`);
    flower.style.setProperty('--ty', `${ty}px`);
    flower.style.setProperty('--r', `${r}deg`);
    flower.style.animationDelay = `${delay}s`;
    
    // Add to container
    flowersContainer.appendChild(flower);
    
    // Create name element (only for some flowers)
    if (index % 2 === 0) {
        setTimeout(() => {
            const nameEl = document.createElement('div');
            nameEl.classList.add('name');
            nameEl.textContent = displayName;
            
            // Position near the flower
            nameEl.style.setProperty('--tx', `${tx * 0.8}px`);
            nameEl.style.setProperty('--ty', `${ty * 0.8}px`);
            nameEl.style.setProperty('--r', `${r * 0.5}deg`);
            nameEl.style.animationDelay = `${delay + 0.2}s`;
            
            flowersContainer.appendChild(nameEl);
            
            // Remove after animation
            setTimeout(() => {
                nameEl.remove();
            }, 6000);
        }, 200);
    }
    
    // Remove after animation
    setTimeout(() => {
        flower.remove();
    }, 6000);
}

// Event listener for heart click
mainHeart.addEventListener('click', createFlowers);

// Initial animation
setTimeout(createFlowers, 1000);