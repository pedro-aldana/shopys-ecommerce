
export type FormAddShirtProps = {
    userId: string;
    categoryIds: { id: string; name: string }[];
    closeDialog: () => void;
}