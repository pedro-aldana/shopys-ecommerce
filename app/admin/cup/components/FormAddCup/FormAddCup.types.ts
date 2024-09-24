
export type FormAddCupProps = {
    userId: string;
    categoryIds: { id: string; name: string }[];
    closeDialog: () => void;
}