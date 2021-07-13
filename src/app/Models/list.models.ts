export interface ListState {
    list:BodyList[]
}

export interface BodyList{
    alias:string,
    fecha:string,
    titulo:string,
    cuerpo:string
}

export const initialState = {
    list:[{
        alias:'xxx',
        fecha:'27-02-1999',
        titulo:'TITULO',
        cuerpo:'cuerpo de la noticia'
    }]
}