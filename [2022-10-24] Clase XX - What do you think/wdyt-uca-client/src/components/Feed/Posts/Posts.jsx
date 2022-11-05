import classes from './Posts.module.scss';

import SinglePost from '../SinglePost/SinglePost';

const Posts = ({ posts = [] }) => {
    const mappedPosts = posts.map(post => {
        return (
            <SinglePost 
                title={ post.title }
                description={ post.description }
                image={ post.image }
            />
        );
    });

    return (
        <section className={ classes["feed-posts-section"] }>
            <h3> Stay tuned for more! </h3>

            <div className={ classes["posts"] }>
                {mappedPosts}
            </div>
        </section>
    );
}

export default Posts;