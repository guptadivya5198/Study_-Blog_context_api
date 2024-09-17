import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogDetails({ post }) {
  return (
    <div className="mt-[30px] ">
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>
      <p>
        By <span>{post.author}</span> on{' '}
        <NavLink to={`/categories/${post.category}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content}</p>

      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag}`}>
            <span>{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;
