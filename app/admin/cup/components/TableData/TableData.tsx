import { Cup } from "@prisma/client"
import { DataTable } from "./data-table"
import { columns } from "./columns"

// Cambiar la definición del tipo de 'TableDataProps' para un arreglo de 'Cup[]'
export type TableDataProps = {
  cups: Cup[] // Asegurarse de que sea un arreglo de Cup
}

export function TableData(props: TableDataProps) {
  const { cups } = props

  return (
    <div className="py-10">
      {/* Especifica el tipo genérico de 'DataTable' si es necesario */}
      <DataTable<Cup, unknown> columns={columns} data={cups} /> {/* Usa <Cup> como tipo genérico */}
    </div>
  )
}
