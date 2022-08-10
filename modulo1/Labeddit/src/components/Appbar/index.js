import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../../containers/Router'

import { setFilteredPosts, setInputSearch } from '../../actions'

import { AppBar, Button, IconButton } from "@material-ui/core";
import { PowerSettingsNewRounded, Search } from '@material-ui/icons';

import { ToolbarStyled, Logo, DivSearch, DivSearchIcons, InputBaseStyled } from './styles'

class Appbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputSearchInAppBar: ''
    }
  }

  logout = () => {
    localStorage.clear()
    this.props.goToLogin()
  }

  onChangeInputSearch = (e) => {
    this.setState({ inputSearchInAppBar: e.target.value })
    const { allPosts, setFilteredPosts, setInputSearch } = this.props
    const { inputSearchInAppBar } = this.state
    const searchData = allPosts.filter(post => {
      const postText = post?.text?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      const postTitle = post?.title?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      const input = inputSearchInAppBar?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      return postText?.includes(input) || postTitle?.includes(input)
    })

    setFilteredPosts(searchData)
    setInputSearch(inputSearchInAppBar)

  }

  render() {
    const { goToFeed, goToLogin, goToProfile, page, token } = this.props
    const { inputSearchInAppBar } = this.state

    const buttonLogin = <Button onClick={goToLogin} color="inherit">Login</Button>
    const buttonFeed = <Button onClick={goToFeed} color="inherit">Feed</Button>
    const buttonProfile = <Button onClick={goToProfile} color="inherit">Profile</Button>
    const buttonLogout = <IconButton color="inherit" onClick={this.logout}><PowerSettingsNewRounded /></IconButton>
    const buttonSearch = <DivSearch>
      <DivSearchIcons>
        <Search />
      </DivSearchIcons>
      <InputBaseStyled
        placeholder="Buscar..."
        inputProps={{ 'aria-label': 'search' }}
        value={inputSearchInAppBar}
        onChange={this.onChangeInputSearch}
      />
    </DivSearch>

    let buttonsPersonalized
    switch (page) {

      case "login":
      case "detail":
        if (token !== null) {
          buttonsPersonalized =
            <div>
              {buttonFeed}
              {buttonProfile}
              {buttonLogout}
            </div>
        }
        break;

      case "feed":
        buttonsPersonalized =
          <>
            {buttonSearch}
            <div>
              {buttonProfile}
              {buttonLogout}
            </div>
          </>
        break;

      case "profile":
        buttonsPersonalized =
          <div>
            {buttonFeed}
            {buttonLogout}
          </div>
        break;

      case "register":
        buttonsPersonalized = buttonLogin
        break;

      default:
        buttonsPersonalized = ""
        break;
    }

    return (
      <div>
        <AppBar position="static">
          <ToolbarStyled variant="dense">

            <Logo variant="h6" color="inherit" onClick={goToLogin}>
              Labedit
            </Logo>

            {buttonsPersonalized}

          </ToolbarStyled>
        </AppBar>
      </div>
    );
  }
}

const user = JSON.parse(localStorage.getItem('user'))

const mapStateToProps = (state) => ({
  allPosts: state.posts.allPosts,
})

const mapDispatchToProps = (dispatch) => {
  return {
    goToFeed: () => dispatch(push(routes.feed)),
    goToLogin: () => dispatch(push(routes.root)),
    goToProfile: () => dispatch(push(`/posts/profile/${user.username}`)),
    setFilteredPosts: (posts) => dispatch(setFilteredPosts(posts)),
    setInputSearch: (inputData) => dispatch(setInputSearch(inputData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appbar);