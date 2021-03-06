import React from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import List from '../../components/album/List'
import { listPosts } from '../../modules/posts'

const Result = () => {
  // const Result = ({ location }) => {
  const dispatch = useDispatch()

  const { posts, error, loading } = useSelector(({ posts, loading }) => ({
    posts: posts.posts,
    error: posts.error,
    loading: loading['posts/LIST_POSTS']
  }))

  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])

  return <List loading={loading} error={error} posts={posts} />
}

Result.propTypes = {
  location: PropTypes.any
}

export default withRouter(Result)
