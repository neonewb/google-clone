import React, { useState } from "react";
import Style from "./Search.module.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false, home = true, inputDefoult = ''}) {
  const [{}, dispatch] = useStateValue();

  const history = useHistory();
  const [input, setInput] = useState(inputDefoult);
  const [inputIsFocused, setInputFocused] = useState(false);

  const onFocusInput = () => setInputFocused(true);
  const onBlurInput = () => setInputFocused(false);

  const inputChanged = (e) => setInput(e.target.value);

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form>
      <div
        className={inputIsFocused ? ( home ?  Style.search__inputFocused : Style.search__inputFocusedSearchPage) : (home ? Style.search__input : Style.search__inputSearchPage)}
      >
        <SearchIcon className={Style.search__inputIcon} />
        <input
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          value={input}
          onChange={inputChanged}
        />
        <MicIcon />
      </div>

      <div className={Style.search__buttons}>
        <Button
          className={hideButtons ? Style.search__buttonsHidden : ""}
          type="submit"
          onClick={search}
          variant="outlined"
        >
          Google Search
        </Button>
        <Button
          className={hideButtons ? Style.search__buttonsHidden : ""}
          type="submit"
          onClick={search}
          variant="outlined"
        >
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
}

export default Search;
