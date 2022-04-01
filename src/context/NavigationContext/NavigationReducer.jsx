const NavigationReducer = (state, action) => {
    switch (action.type){
        case 'TOGGLE_DROPDOWN':
            return{
                ...state,
                showDropdown: !state.showDropdown
            }
        default:
            return state;
    }
}

export default NavigationReducer;