import type { ColumnDef } from "@tanstack/vue-table";

import { Checkbox } from "../components/ui/checkbox";

export const HeaderColumns: <T>() => ColumnDef<T>[] = () => [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        "onUpdate:checked": (value: boolean) => table.toggleAllPageRowsSelected(!!value),
        ariaLabel: "Select all",
        class: "translate-y-[2px]",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        "onUpdate:checked": (value: boolean) => row.toggleSelected(!!value),
        ariaLabel: "Select row",
        class: "translate-y-[2px]",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "url",
    accessorKey: "url",
    header: "Url",
    cell: ({ row }) => row.getValue("url"),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => h("span", {}, "Priority"),
    cell: ({ row }) => {
      return h("div", { class: "flex items-center" }, [h("span", row.getValue("priority"))]);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
