/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Upload
                    <br />
                    the raw images
                  </>
                }
                description="Choose a raw of images for combining them to generate color images. example from the JunoCam website"
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="We create innovative ways to process JunoCam raw images for scientific, artistic, or other fun purposes "
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <input type="file" multiple />
                <DefaultInfoCard color="white" description="Please select rows" />
              </Grid>
            </Grid>
            <Grid>
              <Grid item>
                <DefaultInfoCard description="NASA’s Juno mission is a rotating spacecraft that is revolutionizing our understanding of Jupiter and the formation of our solar system. As part of its instrument set, the Juno spacecraft carries JunoCam—a wide-angle camera primarily used for education and public outreach. JunoCam is capturing dazzling views of the Jovian system in spectacular detail and enabling unique discoveries such as swirling, Earth-size storm clusters at both of Jupiter’s poles. JunoCam also provides the perfect opportunity to experiment with image processing and share the excitement of Jupiter’s exploration.JunoCam takes snapshots at regular intervals as the Juno probe rotates, producing strip images representing the red, green, and blue light bands. These raw, grayscale images of the red/green/blue (RGB) bands can be downloaded from the JunoCam website and used together to produce color RGB images. The JunoCam website provides different stages of processing—raw framelets (a.k.a. raw “Venetian blind” or striped images), preliminary RGB channel images, and map-projected images (RGB channels combined)." />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
