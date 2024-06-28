How to use:

```ts
const contentRestaurantMenu = [
  {
    label: "Drinks",
    value: "drinks",
    menu: [
      {
        type: "Cocktails",
        description: "Small description of the plate",
        name: "The plate name",
        image: "https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png",
        price: "price",
        button: "button",
      },
      {
        type: "Cocktails",
        description: "Small description of the plate",
        name: "The plate name",
        image: "https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png",
        price: "price",
        button: "button",
      },
    ],
  },
  {
    label: "Appetizers",
    value: "appetizers",
    menu: [
      {
        type: "Appetizers",
        description: "Small description of the plate",
        name: "The plate name",
        image: "https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png",
        price: "price",
        button: "button",
      },
      {
        type: "Appetizers",
        description: "Small description of the plate",
        name: "The plate name",
        image: "https://red-onion-restaurant-41dbe.web.app/assets/Breakfast/breakfast1.png",
        price: "price",
        button: "button",
      },
    ],
  },
];
```

```ts
    <ContentRestaurantMenu :menu="contentRestaurantMenu" />
```

The menu will have a tab for each category. that you can pass all the menu items in.
