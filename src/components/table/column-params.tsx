import type { ColumnDef } from "@tanstack/react-table"

export type GaugeParameters = {
  id    : string
  type  : "long-needle" | "short-needle"
  unit  : string
  min   : number
  max   : number
  start : number
  end   : number
}

export const columns: ColumnDef<GaugeParameters>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-center w-full">#</div>,
  },
  {
    accessorKey: "type",
    header: () => <div className="text-center w-full">Type</div>,
  },
  {
    accessorKey: "unit",
    header: () => <div className="text-center w-full">Unit</div>,
  },
  {
    accessorKey: "min",
    header: () => <div className="text-center w-full">Min</div>,
  },
  {
    accessorKey: "max",
    header: () => <div className="text-center w-full">Max</div>,
  },
  {
    accessorKey: "start",
    header: () => <div className="text-center w-full">Start</div>,
  },
  {
    accessorKey: "end",
    header: () => <div className="text-center w-full">End</div>,
  },
];