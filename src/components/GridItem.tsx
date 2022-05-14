import React from "react";

interface GridItemProps {
  photo: string;
  onOpenViewer: (photo: string) => void;
}

const GridItem: React.FC<GridItemProps> = ({ photo, onOpenViewer }) => {
  return (
    <div className="rounded-xl border break-inside overflow-hidden">
      <img
        className="hover:scale-105 duration-300"
        src={photo}
        alt="Тестовая работа автора Malaya"
        onClick={() => {
          onOpenViewer(photo);
        }}
      />
    </div>
  );
};

export default GridItem;
