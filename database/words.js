export const words = [
  { id: 1, name: 'respite', language: 'English' },
  { id: 2, name: 'nocturnal', language: 'English' },
  { id: 3, name: 'incandescence', language: 'English' },
  { id: 4, name: 'languid', language: 'English' },
];

export function getWordById(id) {
  return words.find((word) => word.id === id);
}
