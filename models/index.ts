export interface IServerData {
    [key: string]: any
}

export interface IMenu {
    Label?: string
    id: number
    page: IServerData
}
export type TSocialMedia = {
    id: number
    Icon: IServerData
    Link: string
}
export type TSettings = {
    copyrights?: string
    settings: TSettings
    socialMedia: IServerData
}
export interface IThemeSettings {
    copyrights?: string
    id: number
    page: IServerData
}

export interface IAppContext {
    children?: React.ReactElement[] | React.ReactElement
    menu: IMenu[]
    categories: IServerData[]
    themeSettings: TSettings
    pageContent: IServerData
    categoriesMenu: IServerData[]
    updatePageContent: (pageContent: IServerData) => void
}
