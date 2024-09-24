import React from "react";

type TypeElement = "" | "cup";

export type DataHeaderMainItemProps = {
    icon: React.ComponentType<{className? : string}>,
    typeElement: TypeElement,
    text: string
}


export type HeaderMainProps = {
    userId: string;
    categoryId: {id: string; name: string}[];
}