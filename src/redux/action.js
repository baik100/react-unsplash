const Actions = {
    Types: {
        UPDATE_STATE: "UPDATE_STATE",
        FETCH_SEARCH: "FETCH_SEARCH",
    },

    Creators: {
        updateState: props => ({
            type: Actions.Types.UPDATE_STATE,
            props
        }),

        fetchSearch: query => ({
            type: Actions.Types.FETCH_SEARCH,
            query
        })
    }

};

export default Actions;



