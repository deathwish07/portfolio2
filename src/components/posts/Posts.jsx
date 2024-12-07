import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = ({img}) => {
    return (
        <div className="post post__containers">
            <div className="postInfo">
                
                <span className="postTitle">
                    <div to="/postabc" className="post__title">
                        Lorem ipsum dolor sit amet
                    </div>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}

export default Posts