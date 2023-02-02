import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function EditProject() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}
                sx={{
                    position: 'absolute',
                    width: 150,
                    height: 34,
                    background: '#FFFFFF',
                    borderRadius: 1.5,
                    ml: 180,
                    mt: 3.5,
                }}>
                <img src='/Edit_icon.svg' style={{ height: 20, width: 20, }} />
                <Typography variant='body1'>
                    Edit project
                </Typography>
            </Button>
            <Dialog open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-describedby'
            >
                <DialogTitle id='dialog-title'>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Typography variant='h6'>Edit project</Typography>
                        <CloseIcon />
                    </Box>
                </DialogTitle >
                <DialogContent >
                   
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Button component="label">
                            <Box sx={{
                                border: '1px dashed',
                                borderRadius: 18,
                                height: 100,
                                width: 100,
                                bgcolor: '#E5E9FF',

                            }}>
                                <img src='/Image_icon.svg' style={{ padding: 35 }} />
                            </Box>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <Button component="label">
                            <input hidden accept="image/*" multiple type="file" />
                            <Typography variant='body1'>Drag & drop to Upload</Typography>
                        </Button>
                    </Box>
                    <DialogContentText>
                        Pick theme color
                    </DialogContentText>
                    <Button sx={{ bgcolor: '#3C50E0', height: 35, width: 320, }}>
                        <Typography sx={{ color: 'black' }}>
                            3C50E0
                        </Typography>
                    </Button>
                    <DialogContentText>
                        Project name
                    </DialogContentText>
                    <TextField id="outlined-basic" variant="outlined" sx={{ boxShadow: 1, width: 320 }} />
                    <DialogContentText>
                        Project URL
                    </DialogContentText>
                    <TextField id="outlined-basic" variant="outlined" sx={{ boxShadow: 1, width: 320 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 4 }}>

                        <Button variant="outlined" >Cancel</Button>
                        <Button variant="contained">Save</Button>
                    </Box>
                </DialogContent>


            </Dialog>
        </>
    )
}

export default EditProject