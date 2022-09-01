import { Slider } from './Home.styled';

export const Home = () => {
  return (
    <Slider>
      <Slider.Item>
        <img
          className="d-block w-100"
          src="https://64.media.tumblr.com/4a8e69b507373d68e2a9d49ef71eb483/tumblr_pmq9ezlqYb1rowenko1_400.gifv"
          alt="First slide"
        />
        <Slider.Caption>
          <p>Forget about old paper phonebook</p>
        </Slider.Caption>
      </Slider.Item>

      <Slider.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/fb/bb/07/fbbb0760a584aef3ab63942a885579f5.gif"
          alt="Second slide"
        />

        <Slider.Caption>
          <p>Add and use Your contacts everywhere</p>
        </Slider.Caption>
      </Slider.Item>

      <Slider.Item>
        <img
          className="d-block w-100"
          src="https://www.inspirationde.com/wp-content/uploads/2022/04/Phone-book.gif"
          alt="Third slide"
        />

        <Slider.Caption>
          <p>Manage contacts like on Your smartphone</p>
        </Slider.Caption>
      </Slider.Item>
    </Slider>
  );
};
