import { Grid } from "@mui/material"
import { Box } from "@mui/system"

import Caraousel from "../components/Caraousel"

import Section1 from "../components/Sections/Section1"
import Section2 from "../components/Sections/Section2"
import Section3 from "../components/Sections/Section3"

import SubNavbar from "../components/SubNavbar"

import img1 from '../assets/items/item1.jpg'
import img2 from '../assets/items/item2.jpg'
import img3 from '../assets/items/item3.jpg'
import img4 from '../assets/items/item4.jpg'

import img5 from '../assets/items/item5.jpg'
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

import '../index.css'

const tile1 = {
    title: "Upgrade your home | Amazon Brands & more",
    items: [
      {
        image: img1,
        name: 'Smart LED TVs'
      },
      {
        image: img2,
        name: 'Appliances'
      },
      {
        image: img3,
        name: 'Furnitures'
      },
      {
        image: img4,
        name: 'Kitchen Products'
      },
  ]
}

const tile2 = {
    title: "Up to 60% off | Styles for Men",
    items: [
      {
        image: img1,
        name: 'Smart LED TVs'
      },
      {
        image: img2,
        name: 'Appliances'
      },
      {
        image: img3,
        name: 'Furnitures'
      },
      {
        image: img4,
        name: 'Kitchen Products'
      },
  ]
}

const product1 = {
  title: "Har Ghar Tiranga | 13th-15th August",
  image: img5,
  url: "/tiranga",
  urlName: 'Know More'
}

const product2 = {
  title: "",
  image: img5,
  url: "/tiranga",
  urlName: 'See More'
}

const Home = () => {
  return (
    <Box sx={{}}>
      <SubNavbar />
      <Caraousel />
      <Box sx={{width: '100%', height: '100vh', mt: -40, zIndex: 2, position: 'absolute'}}>
        <Grid container>
            <Grid item md={3} xs={12}>
              <Section1 products={tile1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section1 products={tile2}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section2 product={product1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section3/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section1 products={tile1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section2 product={product1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section1 products={tile1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section1 products={tile1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section2 product={product1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section2 product={product1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section1 products={tile1}/>
            </Grid>

            <Grid item md={3} xs={12}>
              <Section1 products={tile1}/>
            </Grid>
        </Grid>
        <Footer />
      </Box>
    </Box>
  )
}

export default Home
