import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {IconCamera, IconSearch, IconHome, IconExplore} from "../../icons/Icons";
import Actions from "../../redux/action";
import {connect} from "react-redux";
import Sidebar from "../Sidebar";
import DropdownBlack from "../DropdownBlack";

function Header(props) {
    const {dispatch} = props;

    const {
        isDropdownOpen,
        isSidebarOpen
    } = props.state;

    // const {hasSearchBar, handleSearchBar} = useSearchBar(true);
    const {value, onChange} = useFormInput("foo");

    return (
        <>
            <header className="Header">
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
                                className="form-control"
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
                        <li className="nav-item" onClick={() => dispatch(Actions.Creators.updateState({isDropdownOpen: !isDropdownOpen}))}>
                            <Link to="" className="nav-link"><IconExplore/></Link>
                        </li>
                    </ul>
                </nav>

                <div className="Submit-photo">
                    Submit a photo
                    
                </div>

            </header>
            {
                isDropdownOpen &&
                 <DropdownBlack/>
            }
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