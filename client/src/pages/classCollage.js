import { Image } from '@mantine/core';

const ClassCollage = () => {
 
    return (
      <div>
        <Image 
            width={600}
            height={800}
            src={require ('./images/class-collage.JPG')}
            alt='class collage'
            // <img src={require ('./images/pet-collage.JPEG')} alt='pet collage' />
        />
    </div>
    );
  };
  
export default ClassCollage;
  