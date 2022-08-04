import { Image, Center } from '@mantine/core';
import collage from "./images/class-collage.JPG"
import pets from "./images/pet-collage.JPG"

const ClassCollage = () => {
 
    return (
      <Center>
      <div style={{ backgroundImage: `url(${collage})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover", width: 700, height: 700}}>
      </div>
      </Center>
    );
  };

  const PetCollage = () => {
 
    return (
      <Center>
      <div style={{ backgroundImage: `url(${pets})`, backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"fit", width: 700, height: 700}}>
      </div>
      </Center>
    );
  };
  
export {ClassCollage, PetCollage};
  