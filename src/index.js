// Ambil elemen DOM untuk menempatkan kartu
const villaList = document.getElementById("villa-list");

// Loop melalui data villa dan buat elemen card
villas.forEach((villa) => {
  const card = document.createElement("div");
  card.className = "col-md-4";
  card.innerHTML = `
        <div class="card mb-4">
            <img src="${villa.image}" class="card-img-top" alt="${villa.name}">
            <div class="card-body">
                <h5 class="card-title">${villa.name}</h5>
                <p class="card-text">${villa.description}</p>
                <p class="card-text"><strong>${villa.price}</strong></p>
                <a href="#" class="btn btn-primary">Detail Villa</a>
            </div>
        </div>
    `;
  villaList.appendChild(card);
});
