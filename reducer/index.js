/**
 * Created by hasee on 2017/4/27.
 */
const globelReducer = (state={tabIndex:0},action)=>{
  switch (action.type){
      case "changeTabIndex":
          //可以做添加
          console.log(action.data.tabIndex)
          return {tabIndex:action.tabIndex};
      default:
          return state
  }
};

export {globelReducer}
