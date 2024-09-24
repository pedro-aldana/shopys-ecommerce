import { Shirt } from "@prisma/client"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export type TableDataProps = {
  shirts: Shirt[]
}

export  function TableData(props:TableDataProps) {
  
  const {shirts} = props

  return (
    <div className="py-10">
      <DataTable<Shirt,unknown> columns={columns} data={shirts} />
    </div>
  )
}
