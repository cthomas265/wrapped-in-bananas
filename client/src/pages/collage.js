import { Image, Center } from '@mantine/core';

const ClassCollage = () => {
 
    return (
      <Center>
      <div className='collages'>
        <Image 
            width="40vw"
            height="100vh"
            src={require ('./images/class-collage.JPG')}
            alt='class collage'
        />
    </div>
    </Center>
    );
  };

  const PetCollage = () => {
 
    return (
      <Center>
     <div className='collages'>
        <Image 
            width="40vw"
            height="100vh"
            src={require ('./images/pet-collage.JPEG')}
            alt='pet collage'
        />
     </div>
     </Center>
    );
  };
  
export {ClassCollage, PetCollage};
  