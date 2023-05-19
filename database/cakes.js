export const cakes = [
  { id: 1, name: 'cherry' },
  { id: 2, name: 'chocolate' },
  { id: 3, name: 'easter' },
  { id: 4, name: 'macaroon' },
];

export function getCakeById(id) {
  return cakes.find((cake) => cake.id === id);
}
