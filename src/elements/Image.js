import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  return <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
  </React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://1.bp.blogspot.com/-jd26syUy6_s/XqPj6jt4eWI/AAAAAAAAMnU/AJ4mxNl2BPwrGOtInwf1Kz-PqPL14dS4wCLcBGAsYHQ/s1600/%25EB%258B%25A4%25EB%259E%258C%2B%25E3%2582%25B0%25E3%2583%259F%2BPoppy.png",
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  /* min-width: 250px; */
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 80%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  /* --size: ${(props) => props.size}px; */
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;