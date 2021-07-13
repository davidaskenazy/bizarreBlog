import {Action} from '@ngrx/store'

export const SPANISH = '[Notice] Spanish'
export const ENGLISH = '[Notice] English'



export class SpanishMensaje implements Action{
    readonly type = SPANISH;

    constructor(public payload : any){

    }
}

export class EnglishMensaje implements Action{
    readonly type = ENGLISH;

    constructor(public payload : any){
        
    }
}

export type MesajeActions = SpanishMensaje | EnglishMensaje;