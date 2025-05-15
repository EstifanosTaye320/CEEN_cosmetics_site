import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import testim1 from "../assets/testim1.svg";
import testim2 from "../assets/testim2.svg";
import testim3 from "../assets/testim3.svg";

const testimonials = [
  {
    testimonial:
      "Tony has is a really smart way to literally set those fears aside ... That to me, is unleashing the power within. Through his work, I found my strength.",
    name: "TONY LINDLEY",
    relation: "Client of Store",
    image: testim1,
  },
  {
    testimonial:
      "Tony has is a really smart way to literally set those fears aside ... That to me, is unleashing the power within. Through his work, I found my strength.",
    name: "KATTY MORRISS",
    relation: "Client of Store",
    image: testim2,
  },
  {
    testimonial:
      "Tony has is a really smart way to literally set those fears aside ... That to me, is unleashing the power within. Through his work, I found my strength.",
    name: "CHRISTINA POLLY",
    relation: "Client of Store",
    image: testim3,
  },
  {
    testimonial:
      "Tony has is a really smart way to literally set those fears aside ... That to me, is unleashing the power within. Through his work, I found my strength.",
    name: "KATTY MORRISS",
    relation: "Client of Store",
    image: testim1,
  },
  {
    testimonial:
      "Tony has is a really smart way to literally set those fears aside ... That to me, is unleashing the power within. Through his work, I found my strength.",
    name: "CHRISTINA POLLY",
    relation: "Client of Store",
    image: testim2,
  },
  {
    testimonial:
      "Tony has is a really smart way to literally set those fears aside ... That to me, is unleashing the power within. Through his work, I found my strength.",
    name: "CHRISTINA POLLY",
    relation: "Client of Store",
    image: testim3,
  },
];

const HomeLayer5: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <TestimonialCarousel
        title="Clients Testimonials"
        testimonials={testimonials}
      />
    </div>
  );
};

export default HomeLayer5;
