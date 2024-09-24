import React from "react";

type TypeElement = "" | "shirt";

export type DataHeaderMainItemProps = {
    icon: React.ComponentType<{className? : string}>,
    typeElement: TypeElement,
    text: string
}


export type HeaderMainProps = {
    userId: string;
    categoryId: {id: string; name: string}[];
}