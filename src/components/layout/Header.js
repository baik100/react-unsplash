import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {IconCamera, IconSearch, IconHome, IconExplore, IconNotification} from "../../icons/Icons";
import Actions from "../../redux/action";
import {connect} from "react-redux";
import DropExpore from "../DropExplore";
import DropNotification from "../DropNotification";

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
                                    dispatch(Actions.Creators.fetchSearch(value))
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
                                    <Link to="" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link">collections</Link>
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
                                <Link to = "#!" class="header-link on">Editorial</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Following</Link>
                                </li>
                        </ul>
                    </div>
                    <div className="secondary-head">
                        <ul>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Wallpapers</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Textures & Patterns</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Nature</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Current Events</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Architecture</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Business & Work</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Film</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Animals</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Travel</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Fashion</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Food & Drink</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Spirituality</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Experimental</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">People</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Health</Link>
                                </li>
                            <li className="main-header-item">
                                <Link to = "#!" class="header-link">Arts & Culture</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </header>

            {isDropExporeOpen && <DropExpore/>}
            {isDropNotificationOpen && <DropNotification/>}
        </>
    );


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