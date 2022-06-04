

const minss=(val)=>{
    return async(dispatch)=>(
     dispatch({type:"add",payload:-1})
    )
}
const pluss=(val)=>{
    return async(dispatch)=>(
     dispatch({type:"mins",payload:+1})
    )}
export {minss,pluss};