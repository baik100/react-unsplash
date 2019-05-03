import Actions from "./action";

const initialState = {
    isAuth: false,
    isSidebarOpen: false,
    isDropExporeOpen: false,
    isDropNotificationOpen: false
};

export default (state = initialState, action) => {
    switch (action.type) {

        case Actions.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.props
            }
        }

        case Actions.Types.FETCH_PHOTO: {
            return {
                ...state,
                ...action.props
            }
        }


        default:
            return state;
    }
}