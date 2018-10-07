import { globalConstants } from '../constants/';


export function page(state = {}, action) {
   switch (action.type) {
      case globalConstants.LOADING_REQUEST:
         return {
            loading: true
         };

      default:
         return {}
   }
}
