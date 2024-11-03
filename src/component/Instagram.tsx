import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Instagram() {
    return(
        <>
            <div style={{marginTop: '100px', display: 'flex', justifyContent: 'center'}}>
                <IconButton component="a"
                    href="https://www.instagram.com/cosmosscrubs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: 'gray',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                        color: '#E1306C',
                        cursor: 'pointer',
                        },
                    }}>
                    <InstagramIcon fontSize="large" />
                </IconButton>
                <div>
                    <Typography style={{textAlign: 'center'}}>
                        <Link
                            href="https://instagram.com/cosmosscrubs"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                            color: 'black',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease',
                            '&:hover': {
                                color: '#E1306C',
                                cursor: 'pointer',
                            },
                            }}>
                            @cosmosscrubs
                        </Link>' ı Instagram' da takip et
                    </Typography>
                    <Typography variant='body2' style={{textAlign: 'center'}}>
                        Birbirinden iyi yeni tasarımlardan haberdar ol
                    </Typography>
                </div>
            </div>
            

            <Box style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: '20px', width: '50%'}}>
                <ImageList variant="masonry" cols={4} gap={8}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                        />
                        
                        <ImageListItemBar position="below" title={item.author} />
                        
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </>
    );
}

const itemData = [
    {
      img: 'https://ideacdn.net/idea/dz/51/myassets/products/273/9eb67bcc-c490-4534-a175-2c4bef65a7c3.jpeg?revision=1726647953',
      title: 'Bed',
      author: 'swabdesign',
    },
    {
        img: 'https://widget-static.onecommerce.io/widget_source_media/5/8/1/ocsACSRp3_Vmaw/00007a27-0000-1000-8000-000000000000/48976b0f-7d72-11ef-a421-4e7fd03715ab/media',
        title: 'Books',
        author: 'Pavel Nekoranec',
      },
    {
        img: 'https://widget-static.onecommerce.io/widget_source_media/5/8/1/ocsACSRp3_Vmaw/00007a27-0000-1000-8000-000000000000/4742d964-824b-11ef-8e03-6e32e573a3f6/media',
        title: 'Kitchen',
        author: 'Christian Mackie',
      },
    {
      img: 'https://widget-static.onecommerce.io/widget_source_media/5/8/1/ocsACSRp3_Vmaw/00007a27-0000-1000-8000-000000000000/c5e18d44-7fde-11ef-9d22-1e3c7c88f0a3/media',
      title: 'Sink',
      author: 'Charles Deluvio',
    },
    {
        img: 'https://widget-static.onecommerce.io/widget_source_media/5/8/1/ocsACSRp3_Vmaw/00007a27-0000-1000-8000-000000000000/c9f6eb60-7b05-11ef-955b-5e76f3fd5e40/media',
        title: 'Blinds',
        author: 'Darren Richardson',
      },
    {
        img: 'https://ideacdn.net/idea/dz/51/myassets/products/593/99cac725-90b9-47b1-8cd2-24bef97ed5e5.jpeg?revision=1729844503',
        title: 'Chairs',
        author: 'Taylor Simpson',
      },

    {
        img: 'https://ideacdn.net/idea/dz/51/myassets/products/906/2f069f2a-c440-4d9a-9e4a-be7e2e31b66a.jpeg?revision=1728977308',
        title: 'Candle',
        author: 'Fi Bell',
      },
    
    {
      img: 'https://21scrubs.com.au/cdn/shop/files/image2.jpg?v=1726030945&width=740',
      title: 'Coffee',
      author: 'Jen P.',
    },
    {
        img: 'https://widget-static.onecommerce.io/widget_source_media/5/8/1/ocsACSRp3_Vmaw/00007a27-0000-1000-8000-000000000000/97f9cfc2-7bd4-11ef-b661-f28755353f71/thumbnail',
        title: 'Doors',
        author: 'Philipp Berndt',
      },
    {
        img: 'https://widget-static.onecommerce.io/widget_source_media/5/8/1/ocsACSRp3_Vmaw/00007a27-0000-1000-8000-000000000000/199b4aa3-6add-11ef-8bf6-86a76c178e04/media',
        title: 'Laptop',
        author: 'Ben Kolde',
    }
  ];