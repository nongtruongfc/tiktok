import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
    onPrevButtonClick: PropTypes.func.isRequired,
    onNextButtonClick: PropTypes.func.isRequired,
    page: PropTypes.number,
};
PostList.defaultProps = {
    posts: [],
    page: 1
}
function PostList(props) {
    const {posts,onPrevButtonClick,onNextButtonClick} = props;
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
                <button 
                onClick={onPrevButtonClick}
                disabled={page <= 1 ? true : false}
                >
                    PREV
                </button>
                <button onClick={onNextButtonClick} className="button-next">NEXT</button>
            </div> 
        </div>        
    );
}

export default PostList;