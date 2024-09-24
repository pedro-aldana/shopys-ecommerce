import React from "react";

type TypeElement = "" | "category";

export type DataHeaderMainItemProps = {
    icon: React.ComponentType<{className? : string}>,
    typeElement: TypeElement,
    text: string
}


