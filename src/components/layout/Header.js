import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {IconCamera, IconSearch, IconHome, IconExplore, IconNotification} from "../../icons/Icons";
import Actions from "../../redux/action";
import {connect} from "react-redux";
import DropExpore from "../DropExplore";
import DropNotification from "../DropNotification";
import HISTORY, {navigate} from "../../helpers/HistoryHelper";
import classnames from "classnames";

//import Sidebar from "../Sidebar";

function Header(props) {
    const {dispatch} = props;

    const {
        isDropExporeOpen,
        isDropNotificationOpen,
        //isSidebarOpen
    } = props.state;

    // const {hasSearchBar, handleSearchBar} = useSearchBar(true);
    const {value, onChange} = useFormInput("");

    return (
        <>
            <header className="Header">
                <div className="top-header">
                    <div className="container clearfix">
                        <h1 className="logo roboto">
                            <Link to="../pages/main">
                                <IconHome/>
                            </Link>
                        </h1>

                        {/*<div className="menu"*/}
                        {/*onClick={() => dispatch(Actions.Creators.updateState({isSidebarOpen: !isSidebarOpen}))}>*/}
                        {/*menu*/}
                        {/*</div>*/}

                        {
                            // hasSearchBar &&
                            <form
                                className="search-area"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    //dispatch(Actions.Creators.fetchSearch(value))
                                    navigate(`/search/photos/${value}`);
                                }}
                            >
                                <div className="input-group">
                                    <label>
                                        <button className="btn"><IconSearch/></button>
                                    </label>
                                    <input
                                        className="search-input form-control"
                                        type="text"
                                        onChange={onChange}
                                        value={value}
                                        placeholder="Search free high-resolution photos"
                                    />
                                </div>

                            </form>
                        }


                        <nav className="gnb">
                            <ul>
                                <li className="nav-item">
                                    <Link to="../pages/main" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="../pages/collections" className="nav-link">collections</Link>
                                </li>
                                <li className="nav-item"
                                    onClick={() => dispatch(Actions.Creators.updateState({isDropExporeOpen: !isDropExporeOpen}))}>
                                    <Link to="" className="nav-link"><IconExplore/></Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="submit-photo">
                            Submit a photo
                        </div>

                        <div className="notification"
                             onClick={() => dispatch(Actions.Creators.updateState({isDropNotificationOpen: !isDropNotificationOpen}))}>
                            <IconNotification/>
                        </div>

                        <div className="collections">
                            <img
                                src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                                alt=""/>
                        </div>
                    </div>
                </div>
                <div className="main-header">
                    <div className="primary-head">
                        <ul>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Editorial")})}
                                   onClick={() => navigate("/search/photos/Editorial")}>Editorial</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Following")})}
                                   onClick={() => navigate("/search/photos/Following")}>Following</a>
                            </li>
                        </ul>
                    </div>
                    <div className="secondary-head">
                        <ul>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Wallpapers")})}
                                   onClick={() => navigate("/search/photos/Wallpapers")}>Wallpapers</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Textures & Patterns")})}
                                   onClick={() => navigate("/search/photos/Textures & Patterns")}>Textures
                                    & Patterns</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Nature")})}
                                   onClick={() => navigate("/search/photos/Nature")}>Nature</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Current Events")})}
                                   onClick={() => navigate("/search/photos/Current Events")}>Current
                                    Events</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Architecture")})}
                                   onClick={() => navigate("/search/photos/Architecture")}>Architecture</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Business & Work")})}
                                   onClick={() => navigate("/search/photos/Business & Work")}>Business
                                    & Work</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Film")})}
                                   onClick={() => navigate("/search/photos/Film")}>Film</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Animals")})}
                                   onClick={() => navigate("/search/photos/Animals")}>Animals</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Travel")})}
                                   onClick={() => navigate("/search/photos/Travel")}>Travel</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Fashion")})}
                                   onClick={() => navigate("/search/photos/Fashion")}>Fashion</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Food & Drink")})}
                                   onClick={() => navigate("/search/photos/Food & Drink")}>Food &
                                    Drink</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Spirituality")})}
                                   onClick={() => navigate("/search/photos/Spirituality")}>Spirituality</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Experimental")})}
                                   onClick={() => navigate("/search/photos/Experimental")}>Experimental</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/People")})}
                                   onClick={() => navigate("/search/photos/People")}>People</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Health")})}
                                   onClick={() => navigate("/search/photos/Health")}>Health</a>
                            </li>
                            <li className="main-header-item">
                                <a className={classnames("header-link", {isActive: isCurrentPath("/search/photos/Arts & Culture")})}
                                   onClick={() => navigate("/search/photos/Arts & Culture")}>Arts
                                    & Culture</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {isDropExporeOpen && <DropExpore/>}
            {isDropNotificationOpen && <DropNotification/>}
        </>
    );

    function isCurrentPath(pathname) {
        return HISTORY.location.pathname === pathname;
    }


    function useSearchBar(initialState) {
        const [hasSearchBar, setHasSearchBar] = (initialState);

        return {
            hasSearchBar,
            handleSearchBar: setHasSearchBar(!hasSearchBar)
        }
    }

    function useFormInput(initialState) {
        const [value, setValue] = useState(initialState);

        function handleInputValue(e) {
            setValue(e.target.value)
        }

        return {
            value,
            onChange: handleInputValue
        }
    }

}

export default connect(state => ({state}), dispatch => ({dispatch}))(Header);