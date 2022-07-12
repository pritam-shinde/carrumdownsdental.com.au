import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Container, Grid, List, Typography } from '@mui/material';
import { ListItemComp, SectionalHeading, SimpleHero } from '../../Components/Components';
import Data from './Data/Data'

const TNC = () => {
  const breadcrumb = [{ id: "breadcrumb-7.1", link: null, text: "TERMS AND CONDITIONS" }]
  return (
    <>
      <Helmet>
        <meta name="title" content="Terms and Conditions | Carrum Downs Dental Group" />
        <meta name="description" content="Go through our Terms and Conditions that unveils all the information regarding our services, prices & more. By using this site, you are agreeing to the terms of use." />
        <title>Terms and Conditions | Carrum Downs Dental Group</title>
      </Helmet>
      <SimpleHero breadCrumb={breadcrumb} pageTitle="Terms and Conditions" />
      <main>
        <Container maxWidth="xxl" className="py-md-5 py-4">
          <Grid container>
            <Grid item xs={11} md={10} className="mx-auto">
              {
                Data.map(sec => <section id={sec.id} className="mb-md-4 mb-3">
                  <Container maxWidth="xxl">
                    <Box>
                      {
                        sec ? sec.title !== null ? sec.title.length > 0 ? sec.title.map(item=><SectionalHeading type={item.variant} title={item.text} />) : null : null : null
                      }
                      {
                        sec ? sec.para !== null ?sec.para.length > 0 ? sec.para.map((item, index)=><Typography key={`${sec.id}-para${index}`} className="customPara"  dangerouslySetInnerHTML={{ __html: item}} />) : null : null: null
                      }
                      {
                        sec ? sec.list !== null ? sec.list.length > 0 ? <List>
                          {
                            sec.list.map(listItem=><ListItemComp key={listItem.id} prefix={null} text={listItem.text} />)
                          }
                        </List> : null : null : null
                      }
                    </Box>
                  </Container>
                </section>)
              }
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default TNC