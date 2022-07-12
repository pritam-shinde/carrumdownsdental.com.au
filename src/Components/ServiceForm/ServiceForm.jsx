import React, { useState } from 'react';
import { Box, Card, CardHeader, CardContent, TextField, Button, Divider } from '@mui/material';
import { SectionalHeading } from '../Components';

const ServiceForm = () => {
const [message, setMessage] = useState({
    user_name:"",
    user_phone:"",
    user_email:"",
    user_message:""
});

const handleOnChange = (e) =>{
    const {name, value} = e.target;

    setMessage((prev)=>{
        return{
            ...prev,
            [name]: value
        }
    })
}

    return (
        <>
            <Box>
                <Card className="p-3 shadow-none" style={{border:"2px solid #eee", borderRadius:"1.2rem"}}>
                    <SectionalHeading title="Contact Us" align1="center" />
                    <Divider style={{color:"#eee"}} />
                    <CardContent>
                        <form>
                            <Box className="form-group">
                                <TextField type="text"  fullWidth variant='outlined' name="user_name" label="Name" onChange={handleOnChange} value={message.user_name} required />
                            </Box>
                            <Box className="form-group">
                                <TextField type="tel"  fullWidth variant='outlined' name="user_phone" label="Phone" onChange={handleOnChange} value={message.user_phone} required />
                            </Box>
                            <Box className="form-group">
                                <TextField type="email"  fullWidth variant='outlined' name='user_email' label="Email" onChange={handleOnChange} value={message.user_email} required />
                            </Box>
                            <Box className="form-group">
                                <TextField type="text"  fullWidth multiline maxRows={4} name="user_message" variant='outlined' label="Message" rows={4} onChange={handleOnChange} value={message.user_message} required />
                            </Box>
                            <Button className="customBtn">Send</Button>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default ServiceForm