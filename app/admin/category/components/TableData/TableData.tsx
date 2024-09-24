import { Category } from "@prisma/client"
import { DataTable } from "./data-table"
import { columns } from "./columns"

export type TableDataProps = {
    categories: Category[]
}

export  function TableData(props:TableDataProps) {

  const {categories} = props  

  return (
    <div className="py-10">
        <DataTable<Category,unknown> columns={columns} data={categories} />
    </div>
  )
}
