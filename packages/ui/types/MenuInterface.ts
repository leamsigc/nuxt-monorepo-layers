type ButtonProps = VariantProps<typeof buttonStyles>;

export interface MenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: string;
  variant?: ButtonProps["variant"];
  children?: MenuItem[];
}
