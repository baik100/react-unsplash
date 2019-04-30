import Actions from "./action";

const initialState = {
    isAuth: false,
    isSidebarOpen: false,
    isPopupOpen: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case Actions.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }

        default:
            return state;
    }
}