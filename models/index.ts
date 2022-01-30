export interface IServerData {
    [key: string]: any
}
export interface IChildren {
    children?: React.ReactElement[] | React.ReactElement
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

    updateMenu: (menu: IMenu[]) => void
    updateCategories: (categories: IServerData) => void
    updateSettings: (themeSettings: TSettings) => void
    updatePageContent: (pageContent: IServerData) => void
    updateCategoriesMenu: (categoriesMenu: IServerData) => void
}
