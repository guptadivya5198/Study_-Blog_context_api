import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

function Blogs() {
  // consume
  const { posts, loading } = useContext(AppContext);
  // console.log('Printing');
  // console.log(posts);
  return (
    <div className="w-11/12 max-w-[650px] py-4 flex flex-col gap-y-7 mt-[68px] mb-[70px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No Post Found</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
