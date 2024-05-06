import React, { useEffect } from "react";
import SliderBlog from "../../components/SliderBlog";
import SidebarBlog from "../../components/SidebarBlog";
import BlogItem from "../../components/BlogItem";
import axiosClient from "../../axios-client";
import { useState } from "react";
import Pagenation from "../../components/Pagenation";

function BlogList() {
  const [blogItems, setBlogItems] = useState([{}]);
  const [categories, setCategories] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);

  useEffect(() => {
    getBlogItems();
  }, []);

  const getBlogItems = (page = currentPage) => {
    let url = `/user/post?page=${page}`;

    axiosClient.get(url).then((res) => {
      setBlogItems(res.data.posts.data);
      setCategories(res.data.categories);
      setPageCount(res.data.posts.last_page);
      setCurrentPage(res.data.posts.current_page);
    });
  };

  const handleGetCategoryName = (id) => {
    let category = categories.find((category) => category.id === id);
    return category ? category.title : "";
  };

  const handlePageChange = (selectedItem) => {
    console.log(selectedItem);
    const newPage = selectedItem.selected + 1;
    setCurrentPage(newPage);
    getBlogItems(newPage);
  };

  return (
    <>
      <SliderBlog />
      <section className="section blog-wrap bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogItems.map((item, index) => (
                  <BlogItem
                    key={index}
                    imageUrl={item.image}
                    category={handleGetCategoryName(item.category_id)}
                    title={item.title}
                    content={item.summary}
                    link="blog-single.html"
                  />
                ))}
                <Pagenation
                  pageCount={pageCount}
                  currentPage={currentPage - 1}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
            <SidebarBlog />
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;
