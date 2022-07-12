import { Box, Container, Grid, List, Typography } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet'
import { ListItemComp, SectionalHeading, SimpleHero } from '../../Components/Components';
import Data from './Data/Data';

const PrivacyPolicy = () => {

  const breadcrumb = [{ id: "breadcrumb-7.1", link: null, text: "PRIVACY POLICY" }]
  return (
    <>
      <Helmet>
        <meta name="title" content="Privacy Policy | Carrum Downs Dental Group" />
        <meta name="description" content="Read our Privacy Policy carefully. You agree to accept the practices and terms described in this policy while you browse or visit or using the services." />
        <title>Privacy Policy | Carrum Downs Dental Group</title>
      </Helmet>
      <SimpleHero breadCrumb={breadcrumb} pageTitle="Privacy Policy" />
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

export default PrivacyPolicy