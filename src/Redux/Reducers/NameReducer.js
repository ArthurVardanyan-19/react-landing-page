function NameReducer ( state='click on text', action ){
    switch ( action.type ) {
        case 'set_name': return action.payload;
        default: return state;
    }
}

export default NameReducer;