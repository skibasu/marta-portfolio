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

export enum ESectionsNames {
    PAGE_EDITOR = "sections.page-editor",
    SEO = "sections.seo",
}
