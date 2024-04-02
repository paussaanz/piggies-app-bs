import { useEffect, useState } from "react";

const ResponsiveImg = ({ src, alt }) => {
    const [style, setStyle] = useState({});
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
          // Determina si la imagen es vertical u horizontal
          const orientation = img.width > img.height ? 'horizontal' : 'vertical';
          if (orientation === 'horizontal') {
            setStyle({
              width: '400px',
              height: '300px',
              objectFit: 'fill',
              borderRadius: '50%',
            });
          } else {
            setStyle({
              width: '300px',
              height: '400px',
              objectFit: 'fill',
              borderRadius: '50%',
            });
          }
        };
        img.src = src;
      }, [src]);
    return (
        <div>
            
  
    <img src={src} alt={alt} style={style} className="rounded" />
        </div>
    );
};

export default ResponsiveImg;
