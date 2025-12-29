import Pancakes from "./assets/Pancakes.png";
import Chicken_Soup from "./assets/Chicken_Soup.png";
import Minestrone_Soup from "./assets/Minestrone_Soup.png";
import Spaghetti_Carbonara from "./assets/Spaghetti_Carbonara.png";
import Pasta from "./assets/Pasta.png";
import Chicken_Alfredo from "./assets/Chicken_Alfredo.png";
import Paneer_Butter from "./assets/Paneer_Butter.png";
import Chicken_Biryani from "./assets/Chicken_Biryani.png";
import Margherita_Pizza from "./assets/Margherita_Pizza.png";
import Pepperoni_Pizza from "./assets/Pepperoni_Pizza.png";
import Veggie_Burger from "./assets/Veggie_Burger.png";
import Chicken_Burger from "./assets/Chicken_Burger.png";
import Tomato_Soup from "./assets/Tomato_Soup.png";
import Egg_Sandwich from "./assets/Egg_Sandwich.png";
import Mushroom_Soup from "./assets/Mushroom_Soup.png";
import Chicken_Tikka from "./assets/Chicken_Tikka.png";
import Cheese_Omelette from "./assets/Cheese_Omelette.png";
import Fettuccine_Alfredo from "./assets/Fettuccine_Alfredo.png";
import Garlic_Bread from "./assets/Garlic_Bread.png";
import Fish_and_Chips from "./assets/Fish_and_Chips.png";
import Hash_Browns from "./assets/Hash_Browns.png";
import Vegetable_Soup from "./assets/Vegetable_Soup.png";
import Egg_Fried_Rice from "./assets/Egg_Fried_Rice.png";
import Hawaiian_Pizza from "./assets/Hawaiian_Pizza.png";
import Pasta_Primavera from "./assets/Pasta_Primavera.png";

export const food_items = [
    {"id": 1, 
        "food_name": "Pancakes",
         "food_category": "breakfast", 
         "food_type": "veg", 
         "food_quantity": 1, 
         "food_image": Pancakes, 
         "price": 499},
    {"id": 2, "food_name": "Chicken Soup", "food_category": "soups", "food_type": "non_veg", "food_quantity": 1, "food_image": Chicken_Soup, "price": 399},
    {"id": 3, "food_name": "Minestrone Soup", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": Minestrone_Soup, "price": 349},
    {"id": 4, "food_name": "Spaghetti Carbonara", "food_category": "pasta", "food_type": "non_veg", "food_quantity": 1, "food_image": Spaghetti_Carbonara, "price": 999},
    {"id": 5, "food_name": "Veg Alfredo Pasta", "food_category": "pasta", "food_type": "veg", "food_quantity": 1, "food_image": Pasta, "price": 899},
    {"id": 6, "food_name": "Chicken Alfredo Pasta", "food_category": "pasta", "food_type": "non_veg", "food_quantity": 1, "food_image": Chicken_Alfredo, "price": 1099},
    {"id": 7, "food_name": "Paneer Butter Masala", "food_category": "main_course", "food_type": "veg", "food_quantity": 1, "food_image": Paneer_Butter, "price": 799},
    {"id": 8, "food_name": "Chicken Biryani", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": Chicken_Biryani, "price": 1199},
    {"id": 9, "food_name": "Margherita Pizza", "food_category": "pizza", "food_type": "veg", "food_quantity": 1, "food_image": Margherita_Pizza, "price": 649},
    {"id": 10, "food_name": "Pepperoni Pizza", "food_category": "pizza", "food_type": "non_veg", "food_quantity": 1, "food_image": Pepperoni_Pizza, "price": 749},
    {"id": 11, "food_name": "Veggie Burger", "food_category": "burger", "food_type": "veg", "food_quantity": 1, "food_image": Veggie_Burger, "price": 499},
    {"id": 12, "food_name": "Chicken Burger", "food_category": "burger", "food_type": "non_veg", "food_quantity": 1, "food_image": Chicken_Burger, "price": 599},
    {"id": 13, "food_name": "Tomato Soup", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": Tomato_Soup, "price": 299},
    {"id": 14, "food_name": "Egg Sandwich", "food_category": "breakfast", "food_type": "non_veg", "food_quantity": 1, "food_image": Egg_Sandwich, "price": 349},
    {"id": 15, "food_name": "Mushroom Soup", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": Mushroom_Soup, "price": 349},
    {"id": 16, "food_name": "Chicken Tikka Masala", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": Chicken_Tikka, "price": 1199},
    {"id": 17, "food_name": "Cheese Omelette", "food_category": "breakfast", "food_type": "non_veg", "food_quantity": 1, "food_image": Cheese_Omelette, "price": 399},
    {"id": 18, "food_name": "Fettuccine Alfredo", "food_category": "pasta", "food_type": "veg", "food_quantity": 1, "food_image": Fettuccine_Alfredo, "price": 949},
    {"id": 19, "food_name": "Garlic Bread", "food_category": "pizza", "food_type": "veg", "food_quantity": 1, "food_image": Garlic_Bread, "price": 299},
    {"id": 20, "food_name": "Fish and Chips", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": Fish_and_Chips, "price": 1099},
    {"id": 21, "food_name": "Hash Browns", "food_category": "breakfast", "food_type": "veg", "food_quantity": 1, "food_image": Hash_Browns, "price": 249},
    {"id": 22, "food_name": "Vegetable Soup", "food_category": "soups", "food_type": "veg", "food_quantity": 1, "food_image": Vegetable_Soup, "price": 329},
    {"id": 23, "food_name": "Egg Fried Rice", "food_category": "main_course", "food_type": "non_veg", "food_quantity": 1, "food_image": Egg_Fried_Rice, "price": 599},
    {"id": 24, "food_name": "Hawaiian Pizza", "food_category": "pizza", "food_type": "non_veg", "food_quantity": 1, "food_image": Hawaiian_Pizza, "price": 799},
    {"id": 25, "food_name": "Pasta Primavera", "food_category": "pasta", "food_type": "veg", "food_quantity": 1, "food_image": Pasta_Primavera, "price": 899}
];
