export const cakes = [
  { id: 1, name: 'cherry', price: 35 },
  { id: 2, name: 'chocolate', price: 40 },
  { id: 3, name: 'easter', price: 45 },
  { id: 4, name: 'macaroon', price: 45 },
  { id: 5, name: 'oreo', price: 30 },
  { id: 6, name: 'cat', price: 45 },
];

export function getCakeById(id) {
  return cakes.find((cake) => cake.id === id);
}
