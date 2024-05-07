import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ imageUrl, category, title, content, link }) => {
  const handleImage = (image) => {
    return (
      <img
        src={`http://blog.toby.com/get-image/${image}`}
        alt="Image"
        className="img-fluid rounded"
        style={{ height: "300px" }}
      />
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // tùy chọn này giúp cuộn mượt hơn
    });
  };

  const truncateContent = (content, maxLength) => {
    if (!content) return "";
    if (content.length > maxLength) {
      return content.slice(0, maxLength) + "...";
    } else {
      return content;
    }
  };

  return (
    <div className="col-lg-6 col-md-6 mb-5">
      <div className="blog-item">
        {handleImage(imageUrl)}
        <div className="blog-item-content bg-white p-4">
          <div className="blog-item-meta  py-1 px-2">
            <span className="text-muted text-capitalize mr-3">
              <i className="ti-pencil-alt mr-2"></i>
              {category}
            </span>
          </div>
          <div style={{ height: "200px" }}>
            <h3 className="mt-3 mb-3">
              <Link onClick={scrollToTop} to={link}>
                {title}
              </Link>
            </h3>
            <p className="mb-4">{truncateContent(content, 100)}</p>
          </div>
          <Link
            to={link}
            onClick={scrollToTop}
            className="btn btn-small btn-main btn-round-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;