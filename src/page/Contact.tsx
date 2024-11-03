import { Button, TextField, Typography } from '@mui/material';
import { useState }  from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Instagram from '../component/Instagram';

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
    const [errors, setErrors] = useState<any>({});


    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        // Optional: Clear error on field change
        if (errors[name]) {
            setErrors((prevErrors: any) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
    
        const newErrors: any = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.message) newErrors.message = 'Message is required';
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
          console.log('Form submitted:', formData);
          // Perform submission logic here, e.g., API call
        }
      };

    return(
        <>
            <div style={{marginLeft: "auto", marginRight: "auto", display: "flex", flexDirection: "column", width: "50%", marginTop: '50px'}}>
                <Typography variant='h5' style={{marginBottom: "10px"}}>
                    Bize Ulaşın
                </Typography>
                <Typography style={{marginBottom: "10px"}}>
                    Fikirleriniz bizim için önemli!
                    Aşağıdaki formu doldurarak bize ulaşabilirsiniz, en kısa sürede size döneceğiz.
                </Typography>
                <Typography style={{marginBottom: "10px"}}>
                    Alternatif olarak email ile ulaşabilirsiniz.
                </Typography>
                <div style={{display: "flex"}}>
                    <MailOutlineIcon fontSize="medium" style={{marginRight: "5px"}} /> 
                    <Typography variant= "body2" color="textPrimary" component="a" href="mailto:info@cosmos.com.tr" lineHeight={1.6}>
                        info@cosmos.com.tr
                    </Typography>
                </div>

                <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
                    <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    margin="normal"
                    value={formData.name}
                    onChange={handleInputChange}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    />

                    <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    />

                    <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    value={formData.message}
                    onChange={handleInputChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    />

                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                        Submit
                    </Button>
                </form>
            </div>

            <Instagram />
        </>
    );
}