import React from "react";
import { Link } from "react-router-dom";
import style from "./Detail.module.scss";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Detail = () => {
  return (
    <section className={style.detail}>
      <div className={style.container}>
        <div className={style.box}>
          <p className={style.links}>
            <Link to={"/"}>Bosh sahifa</Link> <span><KeyboardArrowRightIcon /></span> Title
          </p>
          <h2>Title</h2>
          <img src="https://picsum.photos/1312/450" width={'1312px'} height={'450px'} alt="image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam similique alias veritatis non consectetur cumque est quas, repellat hic quibusdam eos deserunt ex laboriosam ipsam eveniet, atque doloribus sint? Quo vitae quibusdam quam consequuntur, saepe modi rerum nam omnis. Doloremque rerum corrupti asperiores labore placeat ipsum officiis culpa illo atque hic deleniti ad est, aperiam vel, temporibus dolores. Iste obcaecati adipisci sequi illum porro, quaerat quod eos alias. Unde non optio laborum molestiae quo, sit aliquam sequi. Magnam, ab aut saepe eaque optio incidunt distinctio, nam facilis repudiandae, alias impedit nobis id beatae odit maiores. A quo, est molestias ratione quisquam voluptate placeat quaerat et delectus quam ea illum cupiditate consequuntur, laudantium autem. Veritatis illo ad quas repellendus debitis. Reiciendis quod illum officiis rerum, natus eaque ratione beatae esse consequuntur adipisci nostrum sequi expedita nisi amet, cumque, ducimus consequatur! Accusantium hic similique nobis quod dolorem tenetur doloremque ratione laboriosam nulla incidunt! Nihil facere, optio dicta quos animi in beatae explicabo? Nostrum, facere debitis impedit repellat vero a labore aliquid necessitatibus et, itaque suscipit velit error molestiae eaque! Provident dicta culpa impedit atque quos molestias? Doloremque necessitatibus nisi similique explicabo quo magnam praesentium hic commodi totam deserunt dolores sint mollitia aspernatur quam, obcaecati neque laudantium minima rem, dolorem expedita voluptates voluptatem facilis! Corporis magnam, qui laborum, atque libero fugiat facilis quasi mollitia autem commodi dicta. Ut, sunt exercitationem! Ea pariatur officiis assumenda explicabo a consequatur atque necessitatibus fugiat molestiae minima odio rem facere dolorem quibusdam praesentium id debitis, sint cupiditate voluptatum voluptatibus mollitia. Quia, recusandae unde. Dolores in nihil veritatis quo id, quibusdam neque? At totam nisi labore? Dicta ipsum dolore nobis. Illum facilis, culpa sunt cupiditate necessitatibus debitis eius facere sapiente voluptatibus aliquam incidunt. Ipsam cupiditate dicta iure id, nisi eos eum ducimus, eligendi nemo repellendus distinctio. Beatae doloribus eligendi voluptatum aperiam iusto magnam quam, nisi animi optio obcaecati, quod esse corrupti fugiat unde consectetur vitae repellendus sunt expedita. Officia delectus commodi aspernatur in blanditiis repellendus quod laudantium dolorem id eaque voluptates perferendis quia amet exercitationem facere hic aliquid quaerat, est asperiores placeat corporis! Labore cumque nostrum dicta officia tempora aspernatur quis omnis libero fugit molestias. Odio distinctio nulla libero rem debitis perferendis quia modi possimus, inventore cum nemo officia suscipit perspiciatis repudiandae aperiam dolore voluptas, ad fuga eaque. Est aut at porro, nihil laudantium quas tenetur placeat sunt iusto provident fuga. Consequuntur molestias distinctio ducimus laboriosam dolore facere accusantium fugiat, optio aliquam iste cupiditate dolorem fugit quae, ex, repellat voluptatibus voluptates perspiciatis eum iusto culpa. Maxime itaque ad quia. Beatae nobis autem iure aspernatur velit officiis aut dolores inventore id nostrum. Nam numquam atque corporis amet laudantium quam fugiat ex illum at magni quia rerum quos, eaque consectetur totam eligendi praesentium reprehenderit quidem. Expedita laborum, quibusdam quas mollitia molestias et. Repellat consectetur repellendus quasi velit temporibus dolor, odit error minus reiciendis qui. Nihil harum, fuga praesentium beatae, hic necessitatibus cum ipsam debitis saepe ea inventore. Laborum, aperiam. Dolor unde ducimus doloribus veritatis esse, excepturi rem. Incidunt commodi recusandae obcaecati.</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
