
export type FormAddAccessoryProps = {
    userId: string;
    categoryIds: { id: string; name: string }[];
    closeDialog: () => void;
}