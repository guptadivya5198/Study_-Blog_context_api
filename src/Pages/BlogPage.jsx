import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { AppContext } from '../Context/AppContext';
import BlogDetails from '../Components/BlogDetails';

function BlogPage() {
  const newBaseUrl = 'https://codehelp-apis.vercel.app/api/';
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    // console.log(url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const result = setBlog(data.blog);
      console.log(result);
      const str = setRelatedBlogs(data.relatedBlogs);
      console.log(str);
    } catch (error) {
      console.log('Found an error');
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    // console.log(blogId);
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);
  return (
    <div className="mt-[80px]">
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <div>
          {' '}
          <p>Loading..</p>{' '}
        </div>
      ) : blog ? (
        <div>
          {/* <BlogDetails post={blog} /> */}
          <h2>Related Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />{' '}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No-Blog Found</p>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
