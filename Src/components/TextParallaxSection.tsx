import React from "react";
import { TextParallaxContent, ExampleContent } from "./TextParallaxContent";

const TextParallaxSection = () => {
  return (
    <div className="bg-gaming-dark">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Innovative Solutions"
        heading="Building the Future of Technology"
      >
        <ExampleContent
          contentTitle="Web Development Excellence"
          contentBody="Our team of expert developers creates cutting-edge web applications using the latest technologies and best practices. We focus on delivering scalable, performant, and user-friendly solutions that help businesses thrive in the digital age."
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?q=80&w=2694&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Digital Innovation"
        heading="Transforming Ideas into Reality"
      >
        <ExampleContent
          contentTitle="Custom Solutions"
          contentBody="We specialize in creating tailored digital solutions that address your unique business challenges. From enterprise applications to mobile solutions, we leverage our expertise to deliver innovative products that drive growth and efficiency."
        />
      </TextParallaxContent>
    </div>
  );
};

export default TextParallaxSection;