import styled from "styled-components";

const StyledToggler = styled.div`
  position: relative;
  display: inline-block;
  width: 4em;
  aspect-ratio: 1/0.35;
  & .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: var(--toggle-slide-clr);
    box-shadow: inset 0 0 2px 0.5px var(--toggle-border-clr);
    &::before {
      cursor: pointer;
      position: absolute;
      content: "";
      inset: 0.2em 0.25em;
      width: 30%;
      background-color: var(--toggle-ball-clr);
      transition: transform 0.25s;
    }
    &[data-active="true"] {
      &::before {
        transform: translateX(calc(4em / 2 + 0.28em));
      }
    }

    &.rounded {
      border-radius: 1em;
      &:before {
        border-radius: 1em;
      }
    }
  }
`;

export default StyledToggler;
