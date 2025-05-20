const doorImages = ['door1.png', 'door2.png', 'door3.png']; let current = 0;

const door = document.getElementById('door'); const prev = document.getElementById('prev'); const next = document.getElementById('next');

function updateDoor() { door.src = images/${doorImages[current]}; }

prev.addEventListener('click', () => { current = (current - 1 + doorImages.length) % doorImages.length; updateDoor(); });

next.addEventListener('click', () => { current = (current + 1) % doorImages.length; updateDoor(); });
