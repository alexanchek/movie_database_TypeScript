export const sortData = (array: [], field: string) => {
    return array.sort((a: any, b: any) => a[`${field}`] < b[`${field}`] ? -1 : (a[`${field}`] > b[`${field}`] ? 1 : 0))
}
