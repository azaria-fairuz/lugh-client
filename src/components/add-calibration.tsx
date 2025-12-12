import {
  ButtonGroup,
} from "@/components/ui/button-group"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { TableDataTest } from "@/components/table-data-test"
import { RefreshCcw, Send } from "lucide-react"

export function AddCalibration() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 w-full px-10 py-5">
        <TableDataTest />
      </div>
      <div className="flex-1 p-10 bg-muted/25 overflow-auto scrollbar-hide">
        <FieldGroup>
          <FieldSet>
            <div className="flex">
              <div className="flex-1">
                <FieldLegend className="text-left mb-2">Calibration Data</FieldLegend>
                <FieldDescription className="text-left">
                  add new gauge calibration to be stored  
                </FieldDescription>
              </div>
              <div>
                <ButtonGroup>
                  <Button variant="outline" type="submit"><Send/></Button>
                  <Button variant="outline"><RefreshCcw /></Button>
                </ButtonGroup>
              </div>
            </div>

            <FieldGroup>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Gauge Type
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Needle Type
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="long-needle">long needle</SelectItem>
                      <SelectItem value="short-needle">short needle</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Unit
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">Kg</SelectItem>
                      <SelectItem value="2025">Klb</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">Min Value</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">Max Value</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">Start Degree</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">End Degree</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </div>
    </div>
  )
}