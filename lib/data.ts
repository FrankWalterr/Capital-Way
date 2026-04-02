export const passengerRoutes = [
  {
    route: "Maputo ↔ Maxixe",
    price: "1,000 MZN",
    excess: "20 MZN/kg"
  },
  {
    route: "Maputo ↔ Chimoio",
    price: "2,300 MZN",
    excess: "20 MZN/kg"
  },
  {
    route: "Maputo ↔ Tete",
    price: "3,500 MZN",
    excess: "40 MZN/kg"
  },
  {
    route: "Chimoio ↔ Maxixe",
    price: "2,300 MZN",
    excess: "20 MZN/kg"
  },
  {
    route: "Tete ↔ Maxixe",
    price: "3,500 MZN",
    excess: "40 MZN/kg"
  },
  {
    route: "Tete ↔ Chimoio",
    price: "900 MZN",
    excess: "20 MZN/kg"
  },
  {
    route: "Chimoio ↔ Tete",
    price: "900 MZN",
    excess: "20 MZN/kg"
  }
];

export const cargoRates = [
  {
    route: "Maputo → Maxixe",
    rate: "35 MZN",
    perCm3: "0,015 MZN",
    minimum: "500 MZN"
  },
  {
    route: "Maputo → Chimoio",
    rate: "40 MZN",
    perCm3: "0,015 MZN",
    minimum: "500 MZN"
  },
  {
    route: "Maputo → Tete",
    rate: "60 MZN",
    perCm3: "0,020 MZN",
    minimum: "600 MZN"
  },
  {
    route: "Maxixe → Chimoio",
    rate: "35 MZN",
    perCm3: "—",
    minimum: "500 MZN"
  },
  {
    route: "Maxixe → Tete",
    rate: "60 MZN",
    perCm3: "—",
    minimum: "600 MZN"
  },
  {
    route: "Chimoio → Tete",
    rate: "20 MZN",
    perCm3: "—",
    minimum: "500 MZN"
  }
];

export const terminals = [
  { city: "Maputo", location: "Malanga", phone: "(+258) 87 444 1818" },
  { city: "Maxixe", location: "N1", phone: "(+258) 87 071 1818" },
  {
    city: "Chimoio",
    location: "EN6, Praca dos Trabalhadores",
    phone: "(+258) 86 166 1818"
  },
  { city: "Tete", location: "Matema", phone: "(+258) 87 430 1818" }
];
