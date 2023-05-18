import createImmutableUpdate from 'maraj'

// STORE RESET
export const resetStoreKey = 'RESET_STORE_TO_INITIAL_STATE'
export const resetStore = () => ({ type: resetStoreKey })


// STORE UPDATE
export const functionUpdateKey = 'UPDATE_STORE_WITH_FUNCTION_CALL'
const wrapAsReduxAction = (fn) => ({ type: functionUpdateKey, functionUpdate: fn })
export const storeUpdate = (objectUpdateOrfunctionUpdate) => wrapAsReduxAction(state => createImmutableUpdate(state, typeof objectUpdateOrfunctionUpdate === 'function' ? objectUpdateOrfunctionUpdate(state) : objectUpdateOrfunctionUpdate))

