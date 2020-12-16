import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    const mywidth = this.props.width || 400;
    const myheight = this.props.height || 200;

    return (
      <a href="http://lorempixel.com">
        <img
          src={`http://lorempixel.com/400/200/cats/${randomCat}`}
          alt="Random cat"
          width={`${mywidth}px`}
          height={`${myheight}px`}
        />
      </a>
    );
  }
}

export default RandomCat;
