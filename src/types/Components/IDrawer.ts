interface ILink {
    label: string,
    link: string,
    icon: string
}

export interface IDrawer {
    open: boolean,
    setDrawerOpen: (props: boolean) => void,
    Links: ILink[],
}