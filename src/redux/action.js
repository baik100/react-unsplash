const Actions = {
    Types: {
        UPDATE_STATE: "UPDATE_STATE",
        FETCH_SEARCH: "FETCH_SEARCH",
        FETCH_PHOTO: "FETCH_PHOTO",
    },

    Creators: {
        updateState: props => ({
            type: Actions.Types.UPDATE_STATE,
            props
        }),

        fetchSearch: query => ({
            type: Actions.Types.FETCH_SEARCH,
            query
        }),

        fetchPhoto: () => ({
            type: Actions.Types.FETCH_PHOTO,

        })
    }

};

export default Actions;



