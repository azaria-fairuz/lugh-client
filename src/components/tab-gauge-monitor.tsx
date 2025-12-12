import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ChartGauge } from "@/components/chart-gauge"

export function TabGaugeMonitor() {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="cctv-1">
        <TabsList>
          <TabsTrigger value="cctv-1">CCTV-1</TabsTrigger>
          <TabsTrigger value="cctv-2">CCTV-2</TabsTrigger>
        </TabsList>
        <TabsContent value="cctv-1">
          <div className="flex flex-1 flex-col gap-4 pt-2">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="cctv-2">
          <div className="flex flex-1 flex-col gap-4 pt-2">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
              <div className="bg-muted/25 aspect-3/4 rounded-xl"><ChartGauge /></div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
