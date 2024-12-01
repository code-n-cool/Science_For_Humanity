export const CarouselViewer = (props) => {
  // return <div></div>
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {props.content.map((value, index) => (
          <div
            style={{
              width: props.itemWidth,
              height: "10%",
              height: "100%",
              position: "absolute",
              top: 0,
              transform: "translateX(-50%)",
              left: `${50 + props.itemDeltaWidth * (index - props.current)}%`,
              transition: "0.6s",
            }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};
