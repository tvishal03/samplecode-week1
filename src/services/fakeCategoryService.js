export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "FrontEnd" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "BackEnd" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Cloud" }
];

export function getCategories() {
  return categories.filter(g => g);
}
