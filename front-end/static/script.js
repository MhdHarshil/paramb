// Placeholder for future interactivity
console.log("PARAMB website loaded");


const properties = [
  {
    title: "Luxury Apartment – Bengaluru",
    type: "residential",
    price: "high",
    amount: "₹1.2 Cr",
    description: "3 BHK apartment in prime city location."
  },
  {
    title: "Office Space – Whitefield",
    type: "commercial",
    price: "mid",
    amount: "₹85 L",
    description: "Fully furnished office space."
  },
  {
    title: "Independent Villa – Mysuru",
    type: "residential",
    price: "mid",
    amount: "₹72 L",
    description: "Spacious villa with private garden."
  }
];

const grid = document.getElementById("propertyGrid");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");

function renderProperties() {
  grid.innerHTML = "";

  const filtered = properties.filter(p => {
    return (
      (typeFilter.value === "all" || p.type === typeFilter.value) &&
      (priceFilter.value === "all" || p.price === priceFilter.value)
    );
  });

  filtered.forEach(p => {
    grid.innerHTML += `
      <div class="property-card">
        <div class="property-image"></div>
        <div class="property-content">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="property-price">${p.amount}</div>
        </div>
      </div>
    `;
  });
}

typeFilter.addEventListener("change", renderProperties);
priceFilter.addEventListener("change", renderProperties);

renderProperties();
