import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from '../../actions'

import CreatePost from "../../components/CreatePost"
import Post from "../../components/Post"
import Appbar from "../../components/Appbar";
import Loading from '../../components/Loading/'
import ButtonScrollToTop from "../../components/ButtonScrollToTop";

import { FeedWrapper } from './styles'
import { Typography } from "@material-ui/core";

class FeedPage extends Component {

  componentDidMount = () => {
    this.props.getPosts()
  }

  scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { filteredPosts, inputSearch } = this.props
    const newAllPosts = [...filteredPosts]
    const ordenedPosts = newAllPosts.sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
    })

    return (
      <>
        <Appbar page={"feed"} />
        <ButtonScrollToTop/>
        <FeedWrapper>
          {inputSearch.length <= 1 &&  <CreatePost />}
          {ordenedPosts.length > 0 ?
            ordenedPosts.map(post => <Post post={post} key={post.id} />)
            :
            inputSearch.length === 0 
              ? <Loading open={true} />
              : <div>
                <Typography variant="subtitle1" align="center">
                  Não encontramos :(
                </Typography>
              </div>
          }
        </FeedWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredPosts: state.posts.filteredPosts,
  inputSearch: state.posts.inputSearch
})

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);