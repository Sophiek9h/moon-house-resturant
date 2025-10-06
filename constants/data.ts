import icons from "./icons";
import images from "./images";

export const categories = [
    {
        title: "Desserts",
        category: "dessert",
        image: icons.pie
    },
    {
        title: "All",
        category: "All",
    },
     {
        title: "Pastry",
        category: "pastry",
        image: icons.pastry
    },
    {
        title: "Soups",
        category: "soups",
        image: icons.soup
    },
   
    {
        title: "Tea and Coffee",
        category: "tea",
        image: icons.tea
    },
    {
        title: "Bento Boxes",
        category: "boxes",
        image: icons.boxes
    }
]

export const menueItems = [
    {
        title: "Strawberry Cake Loaf",
        description: "Soft, fluffy loaf cake",
        price: "5.99",
        category: "dessert",
        image: images.cake,
        time: "40 min",
        rating: "3.5",
        details: "Strawberry Cake Loaf is a delightful treat made with fresh strawberries, fluffy cake batter, and a hint of vanilla. Perfect for dessert or a sweet snack!"
    },
    {
        title: "Grape Fruit Pie",
        description: "Juicy grape pie",
        price: "7.99",
        category: "drink",
        image: images.cocktail,
        time: "30 min",
        rating: "2.5",
        details: "Enjoy your fresh cocktail with a mix of fresh grapes, a splash of soda, and a hint of mint. Perfect for a refreshing treat on a warm day!"
    },
    {
        title: "Eggs and Sausages",
        description: "Fluffy eggs and sausages",
        price: "8.09",
        category: "breakfast",
        image: images.eggPlate,
        time: "20 min",
        rating: "4.5",
        details: "Enjoy perfectly fluffy sunny-side up eggs with savory sausages and crispy bacon, paired with buttery toast. Served with sweet baked beans and fresh grilled tomatoes for a hearty start to your day"
    },
]