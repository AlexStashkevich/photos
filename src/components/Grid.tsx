import React, { useCallback, useState } from "react";
import photos from "../assets/json/worklist.json";
import GridItem from "./GridItem";
import ImageViewer from "react-simple-image-viewer";

const Grid: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((photo: string) => {
    setCurrentImage(photos.indexOf(photo));
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div>
      <div className="masonry sm:masonry-sm md:masonry-md">
        {photos.map((item: string, index: number) => {
          return (
            <GridItem key={index} photo={item} onOpenViewer={openImageViewer} />
          );
        })}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
};

export default Grid;
