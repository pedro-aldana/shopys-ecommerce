import { Accessory } from "@prisma/client"
import { DataTable } from "./data-table"
import { columns } from "./columns"


export type TableDataProps = {
  accessory: Accessory[]
}

export  function TableData(props:TableDataProps) {

  const {accessory} = props

  return (
    <div className="py-10">
      <DataTable<Accessory,unknown> columns={columns} data={accessory} />
    </div>
  )
}
