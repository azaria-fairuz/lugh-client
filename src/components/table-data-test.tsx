import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import { ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: GaugeCalibration[] = [
  {
    id: crypto.randomUUID(),
    gaugeType: "type-1",
    needleType: "short needle",
    unit: "Klb",
    min_val: 10,
    max_val: 10,
    start_degree: 10,
    end_degree: 10
  },
  {
    id: crypto.randomUUID(),
    gaugeType: "type-1",
    needleType: "short needle",
    unit: "Klb",
    min_val: 10,
    max_val: 10,
    start_degree: 10,
    end_degree: 10
  },
  {
    id: crypto.randomUUID(),
    gaugeType: "type-1",
    needleType: "short needle",
    unit: "Klb",
    min_val: 10,
    max_val: 10,
    start_degree: 10,
    end_degree: 10
  },
  {
    id: crypto.randomUUID(),
    gaugeType: "type-1",
    needleType: "short needle",
    unit: "Klb",
    min_val: 10,
    max_val: 10,
    start_degree: 10,
    end_degree: 10
  },
  {
    id: crypto.randomUUID(),
    gaugeType: "type-1",
    needleType: "short needle",
    unit: "Klb",
    min_val: 10,
    max_val: 10,
    start_degree: 10,
    end_degree: 10
  }
]

export type GaugeCalibration = {
  id: string
  gaugeType: string
  needleType: "long needle" | "short needle"
  unit: string
  min_val: number
  max_val: number
  start_degree: number
  end_degree: number
}

export const columns: ColumnDef<GaugeCalibration>[] = [
  {
    accessorKey: "gaugeType",
    header: () => <div className="text-center">Gauge</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("gaugeType")}</div>
    ),
  },
  {
    accessorKey: "needleType",
    header: () => <div className="text-center">Needle</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("needleType")}</div>
    ),
  },
  {
    accessorKey: "unit",
    header: () => <div className="text-center">Unit</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("unit")}</div>
    ),
  },
  {
    accessorKey: "max_val",
    header: () => <div className="text-center">Max</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("max_val")}</div>
    ),
  },
  {
    accessorKey: "min_val",
    header: () => <div className="text-center">Min</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("min_val")}</div>
    ),
  },
  {
    accessorKey: "start_degree",
    header: () => <div className="text-center">Start</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("start_degree")}</div>
    ),
  },
  {
    accessorKey: "end_degree",
    header: () => <div className="text-center">End</div>,
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("end_degree")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function TableDataTest() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Gauge"
          value={(table.getColumn("gaugeType")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("gaugeType")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected. */}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
