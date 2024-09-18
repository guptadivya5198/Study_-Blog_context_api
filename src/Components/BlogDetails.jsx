import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogDetails({ post }) {
  return (
    <div className="mt-[30px] ">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-md">{post.title}</span>
      </NavLink>
      <p>
        By <span className="font-semibold">{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category}`}>
          <span className="font-weight-[300px] italic underline">
            {post.category}
          </span>
        </NavLink>
      </p>
      <p>
        Posted on <span>{post.date}</span>
      </p>
      <p>{post.content}</p>

      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag}`}>
            <span className="px-1 py-2 font-sans font-semibold">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
