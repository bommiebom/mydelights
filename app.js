const sampleData = [
  { name: "Monchhichi Classic Boy", brand: "Monchhichi", inCollection: false, inWishlist: false },
  { name: "Labubu Pirate", brand: "Labubu", inCollection: false, inWishlist: false }
];

function loadApp() {
  const collectionList = document.getElementById("collectionList");
  const wishlistList = document.getElementById("wishlistList");
  const databaseList = document.getElementById("databaseList");

  sampleData.forEach((item, index) => {
    const card = createCard(item, index);
    databaseList.appendChild(card);
  });
}

function createCard(item, index) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <strong>${item.name}</strong><br>
    <em>${item.brand}</em><br>
    <button onclick="addToCollection(${index})">Add to Collection</button>
    <button onclick="addToWishlist(${index})">Add to Wishlist</button>
  `;
  return div;
}

function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function addToCollection(index) {
  const item = sampleData[index];
  item.inCollection = true;
  alert(`${item.name} added to Collection!`);
}

function addToWishlist(index) {
  const item = sampleData[index];
  item.inWishlist = true;
  alert(`${item.name} added to Wishlist!`);
}

window.onload = loadApp;
