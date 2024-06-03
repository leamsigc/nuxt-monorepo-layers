# Documentation on how to use and set up the navigation

### Navigation `ContentNavigationHeader`


The call to actions in the header of the navigation.

```ts

const callToActions: MenuItem[] = [
  {
    name: "Register",
    href: "#",
    variant: "outline",
  },
];

```

The actual menu items for the navigation.


```ts
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
```



The ShortLinks for the mobile view:

```ts
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
```
