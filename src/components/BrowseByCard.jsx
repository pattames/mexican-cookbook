import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BotanaCard from "./BotanaCard";
import PlatillosCard from "./PlatillosCard";
import styles from "./BrowseByCard.module.css";

export default function BrowseByCard() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2,
    },
  };

  return (
    <div className={styles.main_container}>
      <h2>Browse our Recipes</h2>
      <Carousel responsive={responsive} draggable={false}>
        <div className={styles.card_container}>
          <BotanaCard />
          <PlatillosCard />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Carousel>
    </div>
  );
}
