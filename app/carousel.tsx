"use client";

import { HTMLAttributes, useRef } from "react";

type CarouselProps = HTMLAttributes<HTMLDivElement> & {};

type Carousel = {
  ({ children, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element;
  Pagination({ children, className, ...props }: HTMLAttributes<HTMLDivElement>): JSX.Element;
};

export const Carousel: Carousel = ({ children, ...props }: CarouselProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="carousel-slider" ref={ref} {...props}>
      {children}
    </div>
  );
};

type CarouselPaginationProps = HTMLAttributes<HTMLDivElement> & {};

// Using this throws error
Carousel.Pagination = function CarouselPagination({
  children,
  className,
  ...props
}: CarouselPaginationProps) {
  return (
    <div className="carousel-pagination" {...props}>
      {children}
    </div>
  );
};

// This will not
export const CarouselPagination = ({ children, className, ...props }: CarouselPaginationProps) => {
  return (
    <div className="carousel-pagination" {...props}>
      {children}
    </div>
  );
};
