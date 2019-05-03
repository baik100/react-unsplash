import React, {useState, useEffect} from 'react';
import MainGalleryItem from '../pages/MainGalleryItem'
import {IconCamera, IconSearch, IconHome, IconExplore, IconNotification} from "../icons/Icons";
import Actions from "../redux/action";
import {connect} from "react-redux";

//useState 함수형 컴포넌트에서 상태를 관리
//useEffect 클래스형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친 형태

function Main(props) {

    const {dispatch} = props;

    const {
        photos= [],
    } = props.state;
    
    useEffect(() => {
        
        //마운트 될때만 실행하고 싶을때
        //데이터가 바뀌어도 다시 실행되지 않음
        
        //dispatch(Actions.Creators.fetchPhoto())
    }, ) //데이터값이 변할때 다시 실행
    
    const {value, onChange} = useFormInput("foo");

    console.log('@@photos',photos);
    console.log('@@props', props);


    return (
        <div className="Main header-padding main-bg">
            <div className="container">
                <div className="visual clearfix">
                    <div className="visual-text">
                        <h3>Unsplash</h3>
                        <p>Beautiful, free photos.</p>
                        <p>Gifted by the world’s most generous community of photographers. 🎁</p>
                    </div>
                    <div className="visual-search">

                        <form
                            className="form-group"
                            onSubmit={(e) => {
                                e.preventDefault();
                                dispatch(Actions.Creators.fetchSearch(value))
                            }}
                        >
                            <div className="input-group">
                                <label>
                                    <button className="visual-search-icon btn">
                                        <IconSearch/>
                                    </button>
                                </label>
                                <input
                                    type="text"
                                    className="visual-search-input form-control"
                                    placeholder="search.."
                                    onChange={onChange}
                                    value={value}
                                />
                            </div>
                        </form>

                    </div>
                    <div className="visual-search-text">
                        Trending searches:flower, wallpaper, background, sad, love
                    </div>
                </div>

                <div className="main-gallery">
                    {
                        photos.map((photo, index) => {

                            return (
                                <MainGalleryItem
                                    key={index}
                                    photo={photo}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
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

export default connect(state => ({state}), dispatch => ({dispatch}))(Main);
