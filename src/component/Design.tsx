import { ImageList, ImageListItem, ImageListItemBar, styled } from '@mui/material';

const ImageListItemWithStyle = styled(ImageListItem)(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
      opacity: 0.7,
      transition: "opacity 0.4s ease"     
    },
  }));

export default function Design() {
    return (
        <ImageList cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItemWithStyle key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar 
                title={item.title} 
                sx={{
                    '& .MuiImageListItemBar-title': {
                      fontSize: '20px', // Change title font size here
                      textAlign: 'center'
                    },
                    '& .MuiImageListItemBar-subtitle': {
                      fontSize: '16px', // Change subtitle font size here
                      textAlign: 'center'
                    },
                  }}/>
            </ImageListItemWithStyle>
          ))}
        </ImageList>
      );
}
  
  const itemData = [
    {
      img: 'https://ideacdn.net/idea/dz/51/themes/selftpl_5fe79683f0551/assets/uploads/slider_image_1.jpg?revision=7.2.8.6-1-1719819660',
      title: 'Comfort Series',
    },
    {
      img: 'https://21scrubs.com.au/cdn/shop/files/Blue.webp?v=1727169367&width=740',
      title: 'Blue Series',
    },
    {
      img: 'https://ideacdn.net/idea/dz/51/themes/selftpl_5fe79683f0551/assets/uploads/banner-8.jpeg?revision=7.2.8.6-1-1719819660',
      title: 'Violet Series',
    },
    {
      img: 'https://21scrubs.com.au/cdn/shop/files/IMG_20231108_150353_288.jpg?crop=region&crop_height=1605&crop_left=0&crop_top=53&crop_width=1284&v=1699432219&width=480',
      title: 'Dentist Series',
    },
    {
      img: 'https://ideacdn.net/idea/dz/51/themes/selftpl_5fe79683f0551/assets/uploads/banner-9.jpeg?revision=7.2.8.6-1-1719819660',
      title: 'Medical Series',
    },
    {
      img: 'https://21scrubs.com.au/cdn/shop/files/SHOPVET.jpg?crop=region&crop_height=580&crop_left=44&crop_top=0&crop_width=464&v=1699518712&width=340',
      title: 'Vet Series',
    },
  ];