function SidebarBlog() {
  return (
    <div className="col-lg-4">
      <div className="sidebar-wrap">
        <div className="sidebar-widget search card p-4 mb-3 border-0">
          <input type="text" className="form-control" placeholder="search" />
          <a href="#" className="btn btn-mian btn-small d-block mt-2">
            search
          </a>
        </div>

        <div className="sidebar-widget card border-0 mb-3">
          <img src="images/blog/blog-author.jpg" alt="" className="img-fluid" />
          <div className="card-body p-4 text-center">
            <h5 className="mb-0 mt-4">Arther Conal</h5>
            <p>Digital Marketer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, dolore.
            </p>

            <ul className="list-inline author-socials">
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-facebook-f text-muted"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-twitter text-muted"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-linkedin-in text-muted"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-pinterest text-muted"></i>
                </a>
              </li>
              <li className="list-inline-item mr-3">
                <a href="#">
                  <i className="fab fa-behance text-muted"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-widget latest-post card border-0 p-4 mb-3">
          <h5>Latest Posts</h5>

          <div className="media border-bottom py-3">
            <a href="#">
              <img className="mr-4" src="images/blog/bt-3.jpg" alt="" />
            </a>
            <div className="media-body">
              <h6 className="my-2">
                <a href="#">Thoughtful living in los Angeles</a>
              </h6>
              <span className="text-sm text-muted">03 Mar 2018</span>
            </div>
          </div>

          <div className="media border-bottom py-3">
            <a href="#">
              <img className="mr-4" src="images/blog/bt-2.jpg" alt="" />
            </a>
            <div className="media-body">
              <h6 className="my-2">
                <a href="#">Vivamus molestie gravida turpis.</a>
              </h6>
              <span className="text-sm text-muted">03 Mar 2018</span>
            </div>
          </div>

          <div className="media py-3">
            <a href="#">
              <img className="mr-4" src="images/blog/bt-1.jpg" alt="" />
            </a>
            <div className="media-body">
              <h6 className="my-2">
                <a href="#">Fusce lobortis lorem at ipsum semper sagittis</a>
              </h6>
              <span className="text-sm text-muted">03 Mar 2018</span>
            </div>
          </div>
        </div>

        <div className="sidebar-widget bg-white rounded tags p-4 mb-3">
          <h5 className="mb-4">Tags</h5>

          <a href="#">Web</a>
          <a href="#">agency</a>
          <a href="#">company</a>
          <a href="#">creative</a>
          <a href="#">html</a>
          <a href="#">Marketing</a>
          <a href="#">Social Media</a>
          <a href="#">Branding</a>
        </div>
      </div>
    </div>
  );
}

export default SidebarBlog;
