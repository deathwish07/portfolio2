import React from 'react';
import "./blogpost.css";


const Blogpost = () => {
    return (
        <section className="blogpost section" id="blogpost">
            <div className="singlePostWrapper">
                <img
                    src='https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    alt=''
                    className='singlePost'
                />

                <h1 className='section__title'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Sai Kumar Arava</b></span>
                    <span className='singlePostDate'>   1 hour ago</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis voluptatibus ullam cum hic assumenda 
                    quod voluptatum dicta id amet! Dolorem doloremque aspernatur blanditiis quia! Voluptate hic distinctio nulla beatae, 
                    magni est ut, nesciunt ipsum veniam molestiae expedita at repudiandae assumenda consectetur nobis quo corrupti? Sed 
                    ab consequuntur in soluta velit iusto molestias eaque animi quas illum explicabo alias, quaerat consequatur repellendus libero. Dolores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis voluptatibus ullam cum hic assumenda 
                    quod voluptatum dicta id amet! Dolorem doloremque aspernatur blanditiis quia! Voluptate hic distinctio nulla beatae, 
                    magni est ut, nesciunt ipsum veniam molestiae expedita at repudiandae assumenda consectetur nobis quo corrupti? Sed 
                    ab consequuntur in soluta velit iusto molestias eaque animi quas illum explicabo alias, quaerat consequatur repellendus libero. Dolores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis voluptatibus ullam cum hic assumenda 
                    quod voluptatum dicta id amet! Dolorem doloremque aspernatur blanditiis quia! Voluptate hic distinctio nulla beatae, 
                    magni est ut, nesciunt ipsum veniam molestiae expedita at repudiandae assumenda consectetur nobis quo corrupti? Sed 
                    ab consequuntur in soluta velit iusto molestias eaque animi quas illum explicabo alias, quaerat consequatur repellendus libero. Dolores.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis voluptatibus ullam cum hic assumenda 
                    quod voluptatum dicta id amet! Dolorem doloremque aspernatur blanditiis quia! Voluptate hic distinctio nulla beatae, 
                    magni est ut, nesciunt ipsum veniam molestiae expedita at repudiandae assumenda consectetur nobis quo corrupti? Sed 
                    ab consequuntur in soluta velit iusto molestias eaque animi quas illum explicabo alias, quaerat consequatur repellendus libero. Dolores.
                </p>
            </div>
        </section>
    )
}

export default Blogpost