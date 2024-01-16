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
    return (
      <Layout id="testimonials">
        <LayoutHeader>
          <LayoutTitle>Testimonials</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialItem key={index} testimonial={testimonial} />
            ))}
          </Slider>
        </LayoutContent>
      </Layout>
    );
  }
}
