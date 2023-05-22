const cherryCakeDescription =
  'Introducing our delectable Cherry Cake, a delightful blend of rich flavors and natural sweetness. Indulge in layers of moist vanilla sponge infused with tangy cherry compote, complemented by a luscious cream cheese frosting. Topped with juicy cherries, this heavenly treat is perfect for any occasion. Order now and experience pure bliss with every bite!';

const chocolateCakeDescription =
  "Dive into chocolate heaven with our decadent Chocolate Cake. Sink your teeth into layers of moist chocolate sponge generously slathered with velvety vanilla ganache. Each bite offers a symphony of intense cocoa flavors that will satisfy the cravings of any chocolate enthusiast. Indulge yourself in this timeless classic that's perfect for any chocolate lover.";

const easterCakeDescription =
  'Celebrate the joy of Easter with our delightful Easter Cake. This festive creation features a light and fluffy sponge cake adorned with pastel-colored buttercream, sprinkles, and charming Easter-themed decorations. With a choice of delectable flavors, this cake is a delightful addition to any Easter gathering, bringing smiles and sweetness to all.';

const macaroonCakeDescription =
  'Experience a taste of elegance with our exquisite Macaroon Cake. Layers of delicate almond sponge cake are lovingly filled with silky buttercream and adorned with an array of colorful macaroons. This delightful creation offers a harmonious blend of textures and flavors, making it an unforgettable treat for any celebration.';

const oreoCakeDescription =
  'Treat your taste buds to our irresistible Oreo Cake, a symphony of chocolatey goodness. Sink into layers of moist chocolate sponge generously filled with crushed Oreo cookies and luscious cream. Topped with a velvety Oreo buttercream frosting and adorned with whole cookies, this cake is an absolute delight for Oreo lovers everywhere.';

const catCakeDescription =
  "Celebrate in style with our whimsical Cat Cake, a purr-fectly charming confection. This adorable creation features a fluffy vanilla sponge, expertly shaped and decorated as a cute feline friend. Complete with vibrant, handcrafted fondant details and a choice of delightful flavors, it's a delightful centerpiece for any cat lover's special occasion.";

export const cakes = [
  { id: 1, name: 'cherry', price: 35, description: cherryCakeDescription },
  {
    id: 2,
    name: 'chocolate',
    price: 40,
    description: chocolateCakeDescription,
  },
  { id: 3, name: 'easter', price: 45, description: easterCakeDescription },
  { id: 4, name: 'macaroon', price: 45, description: macaroonCakeDescription },
  { id: 5, name: 'oreo', price: 30, description: oreoCakeDescription },
  { id: 6, name: 'cat', price: 45, description: catCakeDescription },
];

export function getCakeById(id) {
  return cakes.find((cake) => cake.id === id);
}
