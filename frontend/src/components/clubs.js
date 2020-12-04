import React from "react";
import "../styles/layout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class clubs extends React.Component {
  render() {
    return (
      <div className="body_nopadding">
          <div className="searchbar">
            <div class="search-container">
                <form className="search">
                <input type="text" placeholder="Search.." name="search"/>
                <button className="search_button" >
                    <FontAwesomeIcon icon={faSearch} style={{color: 'black'}}/>
                </button>
                </form>
            </div>
            <div className="button_container">
                <button className="button" style={{backgroundColor: '#1488e0', width: 'auto'}}>Sports</button>
            </div>
          </div>
          <div className="club_list">
            <div className="club_card">
                <div className="club_words">
                    <h3 className="club_name">
                        Archery
                    </h3>
                    <p className="club_description">
                        description
                    </p>
                </div>
                <button className="button">
                    Subscribe
                </button>
            </div>

            <div className="club_card">
                <div className="club_words">
                    <h3 className="club_name">
                        Badminton
                    </h3>
                    <p className="club_description">
                        description
                    </p>
                </div>
                <button className="button">
                    Subscribe
                </button>
            </div>

            <div className="club_card">
                <div className="club_words">
                    <h3 className="club_name">
                        Baseball
                    </h3>
                    <p className="club_description">
                        description
                    </p>
                </div>
                <button className="button">
                    Subscribe
                </button>
            </div>

            <div className="club_card">
                <div className="club_words">
                    <h3 className="club_name">
                        Basketball
                    </h3>
                    <p className="club_description">
                        description
                    </p>
                </div>
                <button className="button">
                    Subscribe
                </button>
            </div>
          </div>
      </div>
    );
  }
}