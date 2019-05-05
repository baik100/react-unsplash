import React, {useState, useEffect} from 'react';
import MainGalleryItem from '../pages/MainGalleryItem'
import {IconCamera, IconSearch, IconHome, IconExplore, IconNotification} from "../icons/Icons";
import Actions from "../redux/action";
import {connect} from "react-redux";
import {navigate} from "../helpers/HistoryHelper";
import '../scss/style.scss'

function MainVisual (props) {

    const {
        dispatch
    } = props;

    const {value, onChange} = useFormInput("foo");
    console.log('@@props', props);
    console.log('@@props', props);

    return (
          <div className="MainVisual">
              <div className="visual clearfix ">
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
                              //dispatch(Actions.Creators.fetchSearch(value))
                              navigate(`/search/photos/${value}`);
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

          </div>
    );


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

export default connect(state => ({...state}) , dispatch => ({dispatch}))(MainVisual);
