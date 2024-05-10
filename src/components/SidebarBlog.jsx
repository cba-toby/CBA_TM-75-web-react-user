function SidebarBlog({ author }) {
  const handleImage = (image) => {
    if (image) {
      return (
        <img
          src={`${process.env.REACT_APP_API_URL}/get-image/${image}`}
          alt=""
          className="img-fluid"
        />
      );
    }
  };
  const { link_facebook, link_x, link_instagram } = author;
  const socialLinks = [
    { name: "Facebook", icon: "fab fa-facebook-f", link: link_facebook },
    { name: "Twitter", icon: "fab fa-twitter", link: link_x },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", link: link_instagram },
  ];

  return (
    <div className="col-lg-4">
      <div className="sidebar-wrap">
        <div className="sidebar-widget card border-0 mb-3">
          {handleImage(author.image)}
          <div className="card-body p-4 text-center">
            <h5 className="mb-0 mt-4">{author.name}</h5>
            <p>Bloger</p>
            <p>{author.info}</p>
            <ul className="list-inline author-socials">
              {socialLinks.map((social, index) => (
                <li key={index} className="list-inline-item mr-3">
                  {social.link ? (
                    <a href={social.link} target="_blank">
                      <i className={social.icon + " text-muted"}></i>
                    </a>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarBlog;
