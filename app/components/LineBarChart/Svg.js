import styled from 'styled-components';

const Svg = styled.svg`
  fill: #000;
  fill-opacity: 0.3;

  path {
    stroke-width: 2px;
    fill: none;
  }

  .axis {
    stroke: #000;
  }

  .axis-labels text {
    fill: #000;
    fill-opacity: 0.9;
    font-size: 12px;
    text-anchor: middle;
  }

  .axis-labels line {
    stroke: #000;
  }

  .gridline {
    opacity: 0.2;
  }
`;

export default Svg;
