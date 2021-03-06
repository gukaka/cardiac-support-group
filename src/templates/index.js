import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Alert from 'react-bootstrap/Alert'
import Carousel from '../components/carousel'
import styles from '../pages/index.module.css'

import '../bootstrap/css/bootstrap.css';
import '../components/fonts.css'

export default ({ data }) => {
    const frontmatter = data.markdownRemark.frontmatter;
    return (
    <div className={styles.container}>
      <SEO metadata={data.site.siteMetadata} />
      <NavBar className={styles.navContainer + " bg-light text-dark"} />
      <Carousel className={styles.content}
      items={frontmatter.carousel} />
      <div className={styles.lower}>
        <Alert variant={'primary'} className={styles.alert}>
          <Alert.Heading>Coronavirus (COVID-19)</Alert.Heading>
          <p className="mb-2">
          Our exercise classes and other activities are still on hold following government guidelines. 
          Our funding is secure, and we will reinstate them once we are confident that the appropriate 
          measures have been implemented to ensure your health and wellbeing.
          </p>
          <p className="mb-2">
          Once again, despite some charities closing due to financial pressures, the group is not in 
          that position and The Trustees look forward to seeing you all again in the future.
          </p>
          <p className="mb-2">
          We will contact our members in due course – should you wish to contact us please contact 
          Barry on 0191 5656892 or Jim on 0191 5226750.
          </p>
          <p>
          Thank you and stay safe.
          </p>
          <hr />
          <Alert.Link href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/news/coronavirus-and-your-health">Coronavirus: what it means for you if you have heart or circulatory disease.</Alert.Link>
        </Alert>
        <CardGroup className={styles.card}>
          <Card>
            <Card.Body>
              <Card.Title>How to Join</Card.Title>
              <Card.Subtitle>GP Referral</Card.Subtitle>
              <Card.Text>
                <p>For non hospital referred patients all that is needed is a completed GP referral form, signed by your healthcare professional.
                Please collect a form either by dropping by an exercise class, or contact us as below.</p>
              </Card.Text>
              <Card.Subtitle>Hospital Referral</Card.Subtitle>
              <Card.Text>
                <p>Hospital referred patients only need to bring their completed hospital-provided referral form.
                Initially, you can attend only Monday and Thursday exercise classes.</p>
              </Card.Text>
              <Card.Subtitle>How much does it cost?</Card.Subtitle>
              <Card.Text>
                <p>As a charity we keep any charges and costs to an absolute minimum. Exercise classes are £2 each and it's £2 for a whole year of membership of the group.</p>
              </Card.Text>
              <Card.Subtitle>Contact Us</Card.Subtitle>
              <Card.Text>
                <p>You can reach Barry Cook (Secretary) on 0191 5656892, or James Baker (Chairman) on 0191 5226750.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Activities</Card.Title>
              <Card.Subtitle>Exercise Classes</Card.Subtitle>
              <Card.Text>
              Our exercise classes are structured to suit your needs and ability. They are held at <a href="https://goo.gl/maps/Px9E6h3eVCryLMLW6">Bede Tower, Burdon Road, Sunderland, SR2 7EA</a>.
      
              <table className="table table-bordered my-3">
                <thead>
                  <th>Day</th>
                  <th>Times</th>
                </thead>
                <tbody>
                <tr>
                  <td rowSpan="2">Monday</td>
                  <td>10:00 - 11:00</td>
                </tr>
                <tr>
                    <td>11:15 - 12:15</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>10:30 - 11:30</td>
                </tr>
                <tr>
                  <td rowSpan="2">Thursday</td>
                  <td>10:00 - 11:00</td>
                </tr>
                <tr>
                    <td>11:15 - 12:15</td>
                </tr>
                </tbody>
              </table>
              </Card.Text>
              <Card.Subtitle>Monthly Socials</Card.Subtitle>
              <Card.Text>
                The group holds free social meetings on the 2nd Thursday of each month at The Refectory,
                Ground Floor, Education Centre, Sunderland Royal Hospital.<br/>
                It runs from 7pm till 9pm with guest speakers, a raffle and refreshments, alongside Bingo if time allows.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <Footer className={styles.footerContainer} />
    </div>
    )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    frontmatter {
      title
      carousel {
        imageUrl
        text
      }
    }
  }
  site {
    siteMetadata {
      description
      title
    }
  }
}
`