import type { ChartConfig } from "@/components/ui/chart"
import { CartesianGrid, Line, XAxis, YAxis, ComposedChart } from "recharts"
import { ChartGaugeButtonGroup } from "@/components/chart-gauge-button-group"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card"

const rand = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min + 1)) + min

const formatTimestamp = (iso: string) => {
  const d = new Date(iso);
  const pad = (n: number) => n.toString().padStart(2, "0");

  // const year = d.getFullYear();
  // const month = pad(d.getMonth() + 1);
  // const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  const seconds = pad(d.getSeconds());

  // return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return `${hours}:${minutes}:${seconds}`;
}

const start = Date.now();
const chartData = Array.from({ length: 120 }, (_, i) => {
  const iso = new Date(start + i * 1000).toISOString();
  return {
    time: formatTimestamp(iso),
    c1: rand(0, 540),
    c2: rand(0, 230),
    c3: rand(0, 80),
    c4: rand(0, 40),
  };
});


const chartConfig = {
  c1: {
    label: "c1 (Kg)",
    color: "var(--chart-1)",
  },
  c2: {
    label: "c2 (Klb)",
    color: "var(--chart-1)",
  },
  c3: {
    label: "c3 (Kg)",
    color: "var(--chart-1)",
  },
  c4: {
    label: "c4 (Klb)",
    color: "var(--chart-1)",
  }
} satisfies ChartConfig

console.log(chartData)

export function ChartGauge() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center">
          <div className="flex-1">
            <CardTitle className="text-start mb-1">GAUGE-1</CardTitle>
            <CardDescription className="text-start">2025-12-12T04:11:40.565Z</CardDescription>
          </div>

          <div>
            <ChartGaugeButtonGroup />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="h-full w-full">
          <ChartContainer config={chartConfig} className="h-full w-full">
            <ComposedChart
              layout="vertical"
              data={chartData}
              margin={{ left: 12, right: 12 }}
            >
              <CartesianGrid horizontal={false} stroke="transparent" />

              <YAxis dataKey="time" type="category" stroke="transparent" />
              <XAxis type="number" hide />

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <Line dataKey="c1" stroke="var(--chart-1)" strokeWidth={2} dot={false}/>
              <Line dataKey="c2" stroke="var(--chart-2)" strokeWidth={2} dot={false}/>
              <Line dataKey="c3" stroke="var(--chart-3)" strokeWidth={2} dot={false}/>
              <Line dataKey="c4" stroke="var(--chart-4)" strokeWidth={2} dot={false}/>
            </ComposedChart>

          </ChartContainer>
        </div>

      </CardContent>
    </Card>
  )
}