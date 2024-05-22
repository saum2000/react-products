

export default function FeaturedProducts() {
  
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.libas.in/cdn/shop/files/desktop-best-seller-banner_2.jpg" alt="" 
            srcSet="//www.libas.in/cdn/shop/files/desktop-best-seller-banner_2.jpg?v=1713873491&amp;width=352 352w, //www.libas.in/cdn/shop/files/desktop-best-seller-banner_2.jpg?v=1713873491&amp;width=832 832w, //www.libas.in/cdn/shop/files/desktop-best-seller-banner_2.jpg?v=1713873491&amp;width=1200 1200w, //www.libas.in/cdn/shop/files/desktop-best-seller-banner_2.jpg?v=1713873491&amp;width=1920 1920w, //www.libas.in/cdn/shop/files/desktop-best-seller-banner_2.jpg?v=1713873491&amp;width=2400 2400w" width="2400" height="960.0" loading="lazy" className="small--hide hero__image hero__image--image_mWUA9r image-element" sizes="100vw" />
          </div>
          <div className="carousel-item">
          <img src="//www.libas.in/cdn/shop/files/desktop_2_33eec431-aca6-47d6-a60e-026050e08029.jpg?v=1715275987&amp;width=2400" alt="desktop_2_33eec431-aca6-47d6-a60e-026050e08029 - Libas" srcSet="//www.libas.in/cdn/shop/files/desktop_2_33eec431-aca6-47d6-a60e-026050e08029.jpg?v=1715275987&amp;width=352 352w, //www.libas.in/cdn/shop/files/desktop_2_33eec431-aca6-47d6-a60e-026050e08029.jpg?v=1715275987&amp;width=832 832w, //www.libas.in/cdn/shop/files/desktop_2_33eec431-aca6-47d6-a60e-026050e08029.jpg?v=1715275987&amp;width=1200 1200w, //www.libas.in/cdn/shop/files/desktop_2_33eec431-aca6-47d6-a60e-026050e08029.jpg?v=1715275987&amp;width=1920 1920w, //www.libas.in/cdn/shop/files/desktop_2_33eec431-aca6-47d6-a60e-026050e08029.jpg?v=1715275987&amp;width=2400 2400w" width="2400" height="962.8838451268358" loading="lazy" className="small--hide hero__image hero__image--image_Je3AKL image-element" sizes="100vw" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
         
        </button>
      </div>
    );
}
