import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);
  return (
    <div>
      <Header />
      <button onClick={() => navigation(-1)}>Back</button>
      <h2>Blogs on{category}</h2>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
