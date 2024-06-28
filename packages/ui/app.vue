<script lang="ts" setup>
import type { MenuItem } from "@UI/types";

/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const callToActions: MenuItem[] = [
  {
    name: "Login",
    href: "#",
  },
  {
    name: "Register",
    href: "#",
    variant: "outline",
  },
];

const MenuLinks: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Exterior Painting",
        href: "/exterior-painting",
        children: [
          {
            name: "About us",
            description: "Learn more about our company and our team.",
            icon: "lucide:flag",
            href: "#",
          },
          {
            name: "Careers",
            description: "Join our team and help us build the future.",
            icon: "lucide:briefcase",
            href: "#",
          },
          {
            name: "Contact us",
            description: "Get in touch with our team.",
            icon: "lucide:mail",
            href: "#",
          },
        ],
      },
      {
        name: "Interior Painting",
        href: "/interior-painting",
        children: [
          {
            name: "About us",
            description: "Learn more about our company and our team.",
            icon: "lucide:flag",
            href: "#",
          },
          {
            name: "Careers",
            description: "Join our team and help us build the future.",
            icon: "lucide:briefcase",
            href: "#",
          },
          {
            name: "Contact us",
            description: "Get in touch with our team.",
            icon: "lucide:mail",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const ShortLinks: MenuItem[] = [
  { name: "About us", href: "#" },
  { name: "Press", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Legal", href: "#" },
  { name: "Support", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Sitemap", href: "#" },
  { name: "Cookie settings", href: "#" },
];
const menuAppetizers = [
  {
    label: "Appetizers",
    value: "appetizers",
    menu: [
      {
        type: "Appetizers",
        description: "Small Guacamole",
        name: "Guacamole chico",
        image: "/guacamole-small.png",
        price: "$6.49",
        button: "Order Now",
      },
      {
        type: "Appetizers",
        description: "Large Guacamole",
        name: "Guacamole grande",
        image: "/guacamole-large.png",
        price: "TBD",
        button: "Order Now",
      },
      {
        type: "Appetizers",
        description: "Small Cheese Dip",
        name: "Cheese dip S",
        image: "/cheese-dip-small.png",
        price: "$6.49",
        button: "Order Now",
      },
      {
        type: "Appetizers",
        description: "Medium Cheese Dip",
        name: "Cheese dip M",
        image: "/cheese-dip-medium.png",
        price: "$12.49",
        button: "Order Now",
      },
      {
        type: "Appetizers",
        description: "Rosa Dip (steak, chicken, chorizo, pico de gallo, chips)",
        name: "Rosa dip",
        image: "/rosa-dip.png",
        price: "$15.99",
        button: "Order Now",
      },
      {
        type: "Appetizers",
        description: "Choriqueso",
        name: "Choriqueso",
        image: "/choriqueso.png",
        price: "$14.99",
        button: "Order Now",
      },
    ],
  },
  {
    label: "Sides",
    value: "sides",
    menu: [
      {
        type: "Sides",
        description: "Fries",
        name: "Papas fritas",
        image: "/fries.png",
        price: "$3.99",
        button: "Order Now",
      },
      {
        type: "Sides",
        description: "Rice",
        name: "Arroz",
        image: "/rice.png",
        price: "$3.99",
        button: "Order Now",
      },
      {
        type: "Sides",
        description: "Beans",
        name: "Frijol",
        image: "/beans.png",
        price: "$3.99",
        button: "Order Now",
      },
      {
        type: "Sides",
        description: "Grilled Chiles",
        name: "Chiles toreados",
        image: "/grilled-chiles.png",
        price: "$2.99",
        button: "Order Now",
      },
    ],
  },
];
const menuDrinks = [
  {
    label: "Drinks / Bebidas",
    value: "drinks_bebidas",
    menu: [
      {
        type: "Drinks / Bebidas",
        description: "Coca-Cola Products",
        name: "Productos Coca-Cola",
        image: "/coca-cola.png",
        price: "$2.75",
        button: "Order Now",
      },
      {
        type: "Drinks / Bebidas",
        description: "Jarrito Bottles",
        name: "Jarrito en botellas",
        image: "/jarrito.png",
        price: "$2.75",
        button: "Order Now",
      },
    ],
  },
  {
    label: "Alcohol",
    value: "alcohol",
    menu: [
      {
        type: "Alcohol",
        description: "Imported Beer",
        name: "Cerveza importada",
        image: "/imported-beer.png",
        price: "$4.99",
        button: "Order Now",
      },
      {
        type: "Alcohol",
        description: "Micheladas",
        name: "Micheladas",
        image: "/micheladas.png",
        price: "$8.99",
        button: "Order Now",
      },
    ],
  },
];

const menuSeafood = [
  {
    label: "Seafood / Mariscos",
    value: "seafood_mariscos",
    menu: [
      {
        type: "Seafood / Mariscos",
        description: "Mojarra",
        name: "Mojarra",
        image: "/mojarra.png",
        price: "$16.99",
        button: "Order Now",
      },
      {
        type: "Seafood / Mariscos",
        description: "Shrimp or Fish Ceviche",
        name: "Ceviche de camarón o pescado",
        image: "/ceviche.png",
        price: "$15.99",
        button: "Order Now",
      },
      {
        type: "Seafood / Mariscos",
        description: "Fried Shrimp",
        name: "F camarón",
        image: "/fried-shrimp.png",
        price: "$19.99",
        button: "Order Now",
      },
      {
        type: "Seafood / Mariscos",
        description:
          "Chipotle Shrimp Burrito with mushrooms, onions, chipotle sauce, rice, beans, salad",
        name:
          "Burrito chipotle con camarón, hongos, cebolla, salsa chipotle, arroz, frijol, ensalada",
        image: "/chipotle-shrimp-burrito.png",
        price: "$19.99",
        button: "Order Now",
      },
    ],
  },
];
const menuSpecial = [
  {
    label: "Day Specials / Especial del dia",
    value: "day_specials_especial_del_dia",
    menu: [
      {
        type: "Day Specials / Especial del dia",
        description: "Saturday: Red Pozole",
        name: "Sábado: pozole rojo",
        image: "/red-pozole.png",
        price: "$15.99",
        button: "Order Now",
      },
      {
        type: "Day Specials / Especial del dia",
        description: "Sunday: Oaxacan Mole",
        name: "Domingo: mole oaxaqueño",
        image: "/oaxacan-mole.png",
        price: "$14.99",
        button: "Order Now",
      },
    ],
  },
  {
    label: "Handmade Tortillas",
    value: "handmade_tortillas",
    menu: [
      {
        type: "Handmade Tortillas",
        description: "Handmade Tortillas",
        name: "Tortillas hechas a mano",
        image: "/handmade-tortillas.png",
        price: "TBD",
        button: "Order Now",
      },
    ],
  },
];
const contentRestaurantMenu = [
  {
    label: "Entries / Platos",
    value: "entries_platos",
    menu: [
      {
        type: "Entries / Platos",
        description: "Carnitas with rice, beans, salad, tortillas",
        name: "Carnitas con arroz, frijol, ensalada y tortillas",
        image: "/carnitas.png",
        price: "$16.99",
        button: "Order Now",
      },
      {
        type: "Entries / Platos",
        description: "Grilled Steak with rice, beans, salad, tortillas",
        name: "Carne asada con arroz, frijol, ensalada y tortillas",
        image: "/grilled-steak.png",
        price: "$16.99",
        button: "Order Now",
      },
      {
        type: "Entries / Platos",
        description: "Beef or Chicken Fajitas with rice, beans, salad, tortillas",
        name: "Fajita de carne o pollo con arroz, frijol, ensalada y tortillas",
        image: "/fajitas.png",
        price: "$16.99",
        button: "Order Now",
      },
      {
        type: "Entries / Platos",
        description: "T-Bone Steak with mushrooms, onions, jalapeños, rice, beans",
        name: "T steak con hongos, cebolla, jalapeños, arroz, frijol",
        image: "/tbone-steak.png",
        price: "$18.99",
        button: "Order Now",
      },
      {
        type: "Entries / Platos",
        description: "Chile Colorado with rice, beans, tortillas",
        name: "Chile colorado con arroz, frijol y tortillas",
        image: "/chile-colorado.png",
        price: "$16.99",
        button: "Order Now",
      },
      {
        type: "Entries / Platos",
        description:
          "Molcajete (grilled steak, chicken breast, chorizo, shrimp, ribs, onions, cheese, chile, rice, beans, salad, tortillas)",
        name:
          "MOLCAJETE (carne asada, pechuga, chorizo, camarón, costilla, cebolla, queso, chile, arroz, frijol, ensalada y tortillas)",
        image: "/molcajete.png",
        price: "$25.99",
        button: "Order Now",
      },
      {
        type: "Entries / Platos",
        description: "Chicken with rice and cheese dip",
        name: "Pollo con arroz y queso dip",
        image: "/chicken-rice-cheese.png",
        price: "$14.99",
        button: "Order Now",
      },
    ],
  },
  {
    label: "Quesadillas / Guaraches / Tacos",
    value: "quesadillas_guaraches_tacos",
    menu: [
      {
        type: "Quesadillas / Guaraches / Tacos",
        description:
          "Quesadilla with mozzarella cheese, your choice of meat, lettuce, sour cream, and Cotija cheese",
        name: "Quesadilla",
        image: "/quesadilla.png",
        price: "$4.99 each",
        button: "Order Now",
      },
      {
        type: "Quesadillas / Guaraches / Tacos",
        description:
          "Shrimp Quesadilla with mozzarella cheese, your choice of meat, lettuce, sour cream, and Cotija cheese",
        name: "Quesadilla de camarón",
        image: "/shrimp-quesadilla.png",
        price: "$9.99 each",
        button: "Order Now",
      },
      {
        type: "Quesadillas / Guaraches / Tacos",
        description:
          "Guarache with beans, your choice of meat, lettuce, sour cream, cheese, avocado, and tomato",
        name: "Guarache",
        image: "/guarache.png",
        price: "$6.99 each",
        button: "Order Now",
      },
      {
        type: "Quesadillas / Guaraches / Tacos",
        description: "Taco with your choice of meat, onions, and cilantro",
        name: "Taco",
        image: "/taco.png",
        price: "$3.99 each",
        button: "Order Now",
      },
    ],
  },
  {
    label: "Memelas",
    value: "memelas",
    menu: [
      {
        type: "Memelas",
        description: "Memelas (order of three: one red, one green, one bean)",
        name: "Memelas (uno rojo, uno verde, uno de frijol)",
        image: "/memelas.png",
        price: "$12.00",
        button: "Order Now",
      },
    ],
  },
];
</script>

<template>
  <div>
    <ContentNavigationHeader
      :call-to-action="callToActions"
      :menu="MenuLinks"
      :short-links="ShortLinks"
      :logo-link="{ title: 'Rosa Mexican Restaurant', href: '/' }"
    />
    <ContentHeroComponent
      :hero-image-url="'https://rosiesmexicancantina.com/wp-content/uploads/2022/09/Rosies-Mexican-Cantina_web_2022.jpg'"
      title="Rosa Mexicana Cocina"
      sub-title="We serve the best Mexican food in town. Homemade mexican food for all of our customers in the area of Huntsville Alabama"
    >
      Make a reservation
      <Icon name="material-symbols:call-end" class="" size="24" />
    </ContentHeroComponent>

    <ContentTheTitle
      title="Rosies Mexican Cocina - Menu"
      sub-title="Our authentic Mexican dishes to satisfy every guest"
      class="mt-12"
    />
    <ContentRestaurantMenu :menu="menuDrinks" default-value="drinks_bebidas" />
    <ContentRestaurantMenu :menu="menuAppetizers" default-value="appetizers" />
    <ContentRestaurantMenu :menu="contentRestaurantMenu" default-value="entries_platos" />
    <ContentRestaurantMenu :menu="menuSeafood" default-value="seafood_mariscos" />
    <ContentRestaurantMenu
      :menu="menuSpecial"
      default-value="day_specials_especial_del_dia"
    />
  </div>
</template>
<style scoped></style>
