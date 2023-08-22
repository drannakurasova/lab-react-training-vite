function Random(props) {
  console.log(typeof props.max);

  let randomNumber = Math.floor(
    Math.random() * (props.max - props.min) + props.min
  );

  console.log(randomNumber);

  return (
    <h3>
      Random value between {props.min} and {props.max} is {randomNumber}
    </h3>
  );
}
export default Random;
