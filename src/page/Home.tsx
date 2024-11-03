import { Typography } from '@mui/material';
import * as React from 'react';
import Design from '../component/Design';

export default function Home() {
    return (
      <>
        <div >
          <img style={{maxWidth: '100%', marginBottom: '50px'}}
            src='https://21scrubs.com.au/cdn/shop/files/21FigR_Hero_2_Banner_copy.webp?v=1724764256&width=3200'
            alt='mainImg'
          />
        </div>

        <div style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', maxWidth: '70%', flexDirection: 'column', gap: '30px'}}>

        <Typography variant='h3'
         style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Playfair Display'}}>
          SOME OF THE BEST SCRUB DESIGNS FROM OUR COLLECTION
        </Typography>

        <Design />


          <Typography variant="h5">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque nam integer bibendum tortor elit malesuada eu nam. Faucibus nulla himenaeos mauris amet mauris. Egestas porta augue natoque odio nec aptent efficitur maecenas. Euismod leo justo fusce facilisi faucibus ornare pulvinar. Sodales massa egestas placerat viverra libero hac! Natoque sodales amet arcu facilisis metus quisque.
          </Typography>

          <Typography variant="h5">

          Enim et nulla quam potenti; ac iaculis diam phasellus convallis. Accumsan gravida inceptos maecenas venenatis scelerisque nascetur commodo mattis sed. Vel ultricies est imperdiet habitasse blandit parturient. Euismod dictum ad dignissim imperdiet, feugiat consequat. Mauris erat interdum massa nisi lorem nullam. Nullam lobortis ridiculus natoque pulvinar tortor nibh mauris. Habitasse nec litora pretium in aliquet magnis.
          </Typography>

          <Typography variant="h5">

          Dapibus cubilia vulputate taciti neque semper lorem mauris. Sapien ad semper mollis libero euismod. Amet dictumst sit feugiat arcu aptent potenti at ornare. Hac purus amet montes habitant scelerisque dapibus. Placerat litora dictumst hendrerit aliquet risus euismod. Cursus magnis mauris vel neque sapien convallis, nostra aptent finibus. Congue nam nunc condimentum torquent tempus. Fusce aptent lacinia ex at pulvinar pharetra.
          </Typography>

          <Typography variant="h5">

          Ante gravida lobortis dui mus eu natoque. Urna eleifend lobortis hac, sed nostra dictumst massa et. Nulla enim vivamus aptent gravida quam curabitur ornare. Volutpat metus euismod magna semper donec tempus arcu. Class congue lacinia quisque et sodales nunc phasellus quisque. Ligula sem taciti pretium senectus ex venenatis ante, dis elit. Litora quisque porttitor tempus tellus nec velit class metus. Consequat euismod ligula praesent vestibulum eu sollicitudin. Tristique nostra sem condimentum ullamcorper; class urna nisl.
          </Typography>

        </div>
      </>
    );
  }