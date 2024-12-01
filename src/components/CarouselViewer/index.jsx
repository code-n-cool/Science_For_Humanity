export const CarouselViewer = (props) => {
  // return <div></div>
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {props.content.map((value, index) => (
        <div
          style={{
            width: props.itemWidth,
            height: "100%",
            position: "absolute",
            transform: "translateX(-50%)",
            left: `${50 + props.itemDeltaWidth * (index - props.current)}%`,
            transition: "0.6s",
          }}
          key={index}
        >
          {value}
        </div>))}
    </div>
  );
};
