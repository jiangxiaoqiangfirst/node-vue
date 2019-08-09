// 结构赋值
import {
  VIEW_NAV,
  VIEW_FOOT,
  VIEW_LOADING,

  UPDATE_HOME,
  UPDATE_FOLLOW,
  UPDATE_COLUMN,
  UPDATE_DETAIL,
  UPDATE_BANNER,
  UPDATE_USER,
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  CLEAR_BUYCAR,
  UPDATE_REG
} from './types'

// OBJ['PRONAME']
export default {

  'VIEW_NAV': (state, payload) => state.bNav = payload,
  ['VIEW_FOOT']: (state, payload) => state.bFoot = payload,
  [VIEW_LOADING]: (state, payload) => state.bLoading = payload,

  [UPDATE_HOME]: (state, payload) => state.home = payload,
  [UPDATE_FOLLOW]: (state, payload) => state.follow = payload,
  [UPDATE_COLUMN]: (state, payload) => state.column = payload,
  [UPDATE_BANNER]: (state, payload) => state.banner = payload,
  [UPDATE_DETAIL]: (state, payload) => state.detail = payload,
  [UPDATE_USER]: (state, payload) => state.user = payload,
  [UPDATE_REG]: (state, payload) => {
    // console.log(payload, '999')
    state.reg = payload
  },


  [ADD_ITEM]: (state, payload) => {
    state.buycar = payload;  //
  },
  [CHANGE_ITEM]: (state, payload) => {
    state.buycar = payload; //替换的是actions传递过来的新值
  },
  [REMOVE_ITEM]: (state, payload) => {
    state.buycar = payload;
  },
  [CLEAR_BUYCAR]: (state, payload) => {
    state.buycar = payload;
  },

}