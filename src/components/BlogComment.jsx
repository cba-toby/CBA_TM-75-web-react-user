function BlogComment() {
  return (
    <>
      <div className="col-lg-12 mb-5">
        <div className="comment-area card border-0 p-5">
          <h4 className="mb-4">2 Comments</h4>
          <ul className="comment-tree list-unstyled">
            <li className="mb-5">
              <div className="comment-area-box">
                <img
                  alt=""
                  src="images/blog/test1.jpg"
                  className="img-fluid float-left mr-3 mt-2"
                />

                <h5 className="mb-1">Philip W</h5>
                <span>United Kingdom</span>

                <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                  <a href="#">
                    <i className="icofont-reply mr-2 text-muted"></i>
                    Reply |
                  </a>
                  <span className="date-comm">Posted October 7, 2018 </span>
                </div>

                <div className="comment-content mt-3">
                  <p>
                    Some consultants are employed indirectly by the client via a
                    consultancy staffing company, a company that provides
                    consultants on an agency basis.{" "}
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="comment-area-box">
                <img
                  alt=""
                  src="images/blog/test2.jpg"
                  className="mt-2 img-fluid float-left mr-3"
                />

                <h5 className="mb-1">Philip W</h5>
                <span>United Kingdom</span>

                <div className="comment-meta mt-4 mt-lg-0 mt-md-0 float-lg-right float-md-right">
                  <a href="#">
                    <i className="icofont-reply mr-2 text-muted"></i>
                    Reply |
                  </a>
                  <span className="date-comm">Posted October 7, 2018</span>
                </div>

                <div className="comment-content mt-3">
                  <p>
                    Some consultants are employed indirectly by the client via a
                    consultancy staffing company, a company that provides
                    consultants on an agency basis.{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-lg-12">
        <form className="contact-form bg-white rounded p-5" id="comment-form">
          <h4 className="mb-4">Write a comment</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name:"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="mail"
                  id="mail"
                  placeholder="Email:"
                />
              </div>
            </div>
          </div>

          <textarea
            className="form-control mb-3"
            name="comment"
            id="comment"
            cols="30"
            rows="5"
            placeholder="Comment"
          ></textarea>

          <input
            className="btn btn-main btn-round-full"
            type="submit"
            name="submit-contact"
            id="submit_contact"
            value="Submit Message"
          />
        </form>
      </div>
    </>
  );
}

export default BlogComment;
