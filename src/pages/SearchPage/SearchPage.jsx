import React from "react";
import Search from "../../components/Search";
import "./SearchPage.css";
import { useStateValue } from "../../StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import Response from "../../Response";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MoreVertIcon from "@material-ui/icons/MoreVert";


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //Live API call Googl Search Engine
  const {data} = useGoogleSearch(term)

  // Mock API call
  // const data = Response;

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="http://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons home = {false} inputDefoult = {term}/>

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageOutlinedIcon />
                <Link to="/">Images</Link>
              </div>
              <div className="searchPage__option">
                <ChromeReaderModeOutlinedIcon />
                <Link to="/">News</Link>
              </div>
              <div className="searchPage__option">
                <VideoLibraryOutlinedIcon />
                <Link to="/">Videos</Link>
              </div>
              <div className="searchPage__option">
                <RoomOutlinedIcon />
                <Link to="/">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
            <div className="searchPage__option">
                <Link to="/">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className='searchPage__resultsCount'>

            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map(item => (
            <div className="searchPage__result">
              <a target="_blank" className="searchPage__resultLink" href={item.link}>
              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} />
              )}
              {item.displayLink} ▽
              </a>
              <a target="_blank" className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default SearchPage;
