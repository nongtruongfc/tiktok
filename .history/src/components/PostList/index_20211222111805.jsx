import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.func,
};
PostList.defaultProps = {
    posts: []
}
function PostList(props) {
    return (
        <div className="post-list flex">
            
                {posts.map(post => (
                    <div key={post.id} className="flex-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>  
                ))}
            
        </div>
    );
}

export default PostList;