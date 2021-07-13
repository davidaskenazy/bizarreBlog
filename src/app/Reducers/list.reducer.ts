import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import {Action} from '@ngrx/store'
import * as fromList from '../Actions/list.action'
import * as fromModels from '../Models/list.models'


export function Reducer(state : fromModels.ListState = fromModels.initialState, action: fromList.MesajeActions){
    switch (action.type) {
        case fromList.SPANISH:
            return{
                ...state,
                list: action.payload
            }
            case fromList.ENGLISH:
                return{
                    ...state,
                    list: action.payload
                }
            
        default:
            return state;
    }
}