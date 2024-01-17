import { motion } from "framer-motion";
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TESTIMONIALS as testimonials } from "@/lib/data";
import "./testimonial.css";
import { TestimonialItem } from "./TestimonialItem";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "../../Layout";

export class Testimonial extends Component {
  render() {
    const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: true,
      dots: true,

      speed: 500,
      autoplay: true,
      autoplaySpeed: 6000,
      className: "center",
      centerPadding: "60px",
      centerMode: true,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1150,
          settings: {
            swipeToSlide: true,
            className: "",
            centerPadding: "",
            centerMode: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            className: "",
            centerPadding: "",
            centerMode: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            className: "",
            centerPadding: "",
            centerMode: false,
            arrows: false,
          },
        },
      ],
    };

    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5, // Ajout d'un délai entre chaque témoignage
        },
      },
    };

    const item = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <Layout id="testimonials">
        <LayoutHeader>
          <LayoutTitle elementId="testimonial-title">Testimonials</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <motion.div variants={container} initial="hidden" animate="visible">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={item}>
                  <TestimonialItem testimonial={testimonial} />
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </LayoutContent>
      </Layout>
    );
  }
}
