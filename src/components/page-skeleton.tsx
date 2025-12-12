import { Skeleton } from "@/components/ui/skeleton";
import { TableSkeleton } from "@/components/table-skeleton";
import { ThemeProvider } from "@/components/theme-provider";

export function PageSkeleton() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col flex-1">
        {/* Header skeleton */}
        <header className="flex h-16 items-center gap-2 px-4">
          {/* SidebarTrigger circle */}
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-6 w-6" />

          {/* Breadcrumb skeleton */}
          <div className="flex items-center gap-2 ml-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-40" />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-4">
            
            {/* Left panel skeleton (table) */}
            <div className="bg-muted/25 rounded-xl p-4 h-full">
              <TableSkeleton />
            </div>

            {/* Right panel skeleton */}
            <div className="bg-muted/25 rounded-xl p-4 h-full">
              <div className="space-y-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
