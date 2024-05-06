import React from "react";

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

          <h3 className="mt-3 mb-3">
            <a href={link}>{title}</a>
          </h3>
          <p className="mb-4">{content}</p>

          <a href={link} className="btn btn-small btn-main btn-round-full">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
