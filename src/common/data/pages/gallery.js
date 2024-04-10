import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

//Images
const media1 = "/assets/img/media/1.jpg"
const media2 = "/assets/img/media/2.jpg"
const media4 = "/assets/img/media/4.jpg"
const media5 = "/assets/img/media/5.jpg"
const media6 = "/assets/img/media/6.jpg"
const media7 = "/assets/img/media/7.jpg"
const media8 = "/assets/img/media/8.jpg"

export default function Gallery2() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    media1,
    media8,
    media4,
    media5,
    media7,
    media2,
    media4,
    media5,
    media6,
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div id="lightgallery" className="list-unstyled row">
      {images.map((image, index) => (
        <div
          className="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
          key={Math.random()}
        >
          <img onClick={() => openImageViewer(index)} src={`${image}`} group="group1" />
        </div>
      )
      )}
      {isViewerOpen && (
        <ImageViewer key={Math.random()}
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}
