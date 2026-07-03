export const useMassiveActions = (items: number[], itemToSearch: number) => {
    return items.find((item) => item === itemToSearch);
}