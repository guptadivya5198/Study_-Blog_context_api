import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { AppContext } from '../Context/AppContext';
import BlogDetails from '../Components/BlogDetails';
import Spinner from '../Components/Spinner';

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
      setRelatedBlogs(data.relatedBlogs);
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
    <div>
      <Header />
      <div>
        <button
          className=" flex flex-col ml-[430px] mt-[95px] border-slate-500 border rounded-md px-5 py-2"
          onClick={() => navigation(-1)}
        >
          Back
        </button>
      </div>
      {loading ? (
        <div>
          <Spinner /> <p className="text-center ">Loading..</p>{' '}
        </div>
      ) : blog ? (
        <div className="w-11/12 max-w-[650px] py-1 flex flex-col ml-[430px] mb-[70px]">
          <BlogDetails post={blog} />
          <h2 className="font-bold underline mt-4 text-xl">Related Blogs</h2>
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
