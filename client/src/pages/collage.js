import { Image } from '@mantine/core';

const ClassCollage = () => {
 
    return (
      <div>
        <Image 
            width="40vw"
            height="100vh"
            src={require ('./images/class-collage.JPG')}
            alt='class collage'
            // <img src={require ('./images/pet-collage.JPEG')} alt='pet collage' />
        />
    </div>
    );
  };

  const PetCollage = () => {
 
    return (
     <div>
        <Image 
            width="40vw"
            height="100vh"
            src={require ('./images/pet-collage.JPEG')}
            alt='pet collage'
        />
     </div>
    );
  };
  
export {ClassCollage, PetCollage};
  