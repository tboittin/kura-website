import React, { useState } from "react";
import LightBox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const IMAGES = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      thumbnail:
        "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" }
      ],
      caption: "Boats (Jeshu John - designerspics.com)"
    },
  
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      thumbnail:
        "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 212
    }
  ];

const Audio = () => {
    const [showLight, setShowLight] = useState(null);

    const showLightBox = (index) => {
        setShowLight({
            startIndex: index,
        });
    };

    const hideLightBox = () => {
        setShowLight(null);
    };
    return (
        <div>
            {IMAGES.map((image, index) => (
                <img
                    src={image.src}
                    alt={"Excessive length"}
                    style={{ margin: 10 }}
                    width="200"
                    height="150"
                    onClick={() => showLightBox(index)}
                />
            ))}
            {showLight ? (
                <LightBox
                    images={IMAGES.map((img) => ({
                        url: img.src,
                        title: img.caption,
                    }))}
                    startIndex={showLight.startIndex}
                    onClose={hideLightBox}
                />
            ) : null}
        </div>
    );
};

export default Audio;
