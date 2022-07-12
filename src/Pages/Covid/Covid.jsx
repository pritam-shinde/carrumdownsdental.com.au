import React from 'react';
import { Container, Grid, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { SimpleHero } from '../../Components/Components';
import data from './Data/Data';

const Covid = () => {
  return (
    <>
      <SimpleHero pageTitle="How we can Reduce the Spread of Corona virus Together" />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container >
              <Grid item xs={11} md={10} className="mx-auto">
                <Box py={5} >
                  {
                    data ? data.map(item => <Box key={item.id}>
                      {
                        item.title ? <Typography><strong>{item.title}</strong></Typography> : null
                      }
                      {
                        item.para.length > 0 ? item.para.map((paraItem, index) => <Typography className='customPara' key={`${item.id}.para${index}`}>{paraItem}</Typography>) : null
                      }
                      {
                        item.list.length > 0 ? <Box mt={3}>
                          <List>
                            {
                              item.list.map((listitem, index) => <ListItem key={`${item.id}.listItem${index}`}>
                                <ListItemIcon>
                                  <CheckCircleOutline style={{color:"var(--light-green)"}} />
                                </ListItemIcon>
                                <ListItemText primary={listitem} />
                              </ListItem>)
                            }
                          </List>
                        </Box> : null
                      }
                    </Box>) : null
                  }
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Covid