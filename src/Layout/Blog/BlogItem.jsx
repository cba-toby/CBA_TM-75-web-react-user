import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../../axios-client";
import SliderBlog from "../../components/SliderBlog";
import SidebarBlog from "../../components/SidebarBlog";
import BlogContent from "../../components/BlogContent";
import BlogComment from "../../components/BlogComment";

function BlogItem() {
  const { slug } = useParams();
  const [postItem, setPostItem] = useState({});

  useEffect(() => {
    getItems(slug);
  }, []);

  const getItems = (slug) => {
    let url = `/user/post/show/${slug}`;

    axiosClient
      .get(url)
      .then((res) => {
        setPostItem(res.data.post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <SliderBlog />
      <section className="section blog-wrap bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <BlogContent data={postItem} />
                <BlogComment />
              </div>
            </div>
            <SidebarBlog />
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogItem;