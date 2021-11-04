export const sortData = (array: [], field: string) => {
    console.log(array);
    return array.sort((a: any, b: any) => a[`${field}`] < b[`${field}`] ? -1 : (a[`${field}`] > b[`${field}`] ? 1 : 0))

    // return array.sort((a: any, b: any) => (a[`${field}`] - b[`${field}`]));
}
