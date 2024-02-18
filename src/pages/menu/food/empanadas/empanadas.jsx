import Swiper from "../../../../component/swiper/swiper";
import { empanadas } from "../../../../const/const";

function Empanadas() {
  return (
    <div className="empanadas__body">
      <div className="swiper__card">
        <Swiper image={empanadas} />
      </div>
    </div>
  );
}

export default Empanadas;
