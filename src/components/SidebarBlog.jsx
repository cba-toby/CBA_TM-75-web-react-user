function SidebarBlog() {
  return (
    <div className="col-lg-4">
      <div className="sidebar-wrap">
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
      </div>
    </div>
  );
}

export default SidebarBlog;
