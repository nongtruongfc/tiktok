import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.func,
};
PostList.defaultProps = {
    posts: []
}
function PostList(props) {
    const {posts} = props;
    return (
        <div>
            <div className="post-list flex">
                {posts.map(post => (
                    <div key={post.id} className="flex-item">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>  
                ))}
                
            </div>
            <div className="pagination">
                <button className="button-prev">PREV</button>
                <button className="button-next">NEXT</button>

            </div> 
        </div>        
    );
}

export default PostList;