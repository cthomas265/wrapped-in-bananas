import { Image } from '@mantine/core';

const PetCollage = () => {
 
    return (
     <div>
        <Image 
            width={600}
            height={800}
            src={require ('./images/pet-collage.JPEG')}
            alt='pet collage'
        />
     </div>
    );
  };
  
export default PetCollage;