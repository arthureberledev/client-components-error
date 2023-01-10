import { Carousel, CarouselPagination } from "./carousel";

export default function Home() {
  return (
    <main>
      <h1>Testing</h1>
      <Carousel>
        <Carousel.Pagination />
        {/* <CarouselPagination /> */}
      </Carousel>
    </main>
  );
}
