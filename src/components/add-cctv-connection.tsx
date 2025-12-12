import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardAction,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { 
  Cable, 
  Unplug, 
  Trash2
} from "lucide-react"

interface AddCctvConnectionProps {
  id: string;
  index: number;
  onDelete: (id: string) => void;
  onConnection: (status: boolean) => void;
}

export function AddCctvConnection({ id, index, onDelete, onConnection }: AddCctvConnectionProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-left">CCTV-{index}</CardTitle>
        <CardDescription className="text-left">
          RTSP CCTV connection
        </CardDescription>
        <CardAction>
          <Button variant="outline" onClick={() => onDelete(id)}>
            <Trash2 />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="cctv-ip">URL</Label>
              <Input id="cctv-ip" name="cctv-ip" type="url" placeholder="ip_address:port/enpoint_path" required/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cctv-username">User</Label>
              <Input id="cctv-username" name="cctv-username" type="text" placeholder="enter username" required/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cctv-password">Password</Label>
              <Input id="cctv-password" name="cctv-password" type="password" placeholder="enter password" required/>
            </div>
          </div>  
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full" onClick={() => onConnection(true)}>
          <Cable />
          Connect
        </Button>
        <Button variant="outline" className="w-full" onClick={() => onConnection(true)}>
          <Unplug />
          Disconnect
        </Button>
      </CardFooter>
    </Card>
  )
}