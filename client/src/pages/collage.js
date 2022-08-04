import { Image, Center } from '@mantine/core';
import collage from "./images/class-collage.JPG"
import pets from "./images/pet-collage.JPG"

const ClassCollage = () => {
 
    return (
      <div style={{ backgroundImage: `url(${collage})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width: 900, height: 700}}>
      </div>
    );
  };

  const PetCollage = () => {
 
    return (
      <div style={{ backgroundImage: `url(${pets})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"fit", width: 900, height: 700}}>
      </div>
    );
  };
  
export {ClassCollage, PetCollage};
  