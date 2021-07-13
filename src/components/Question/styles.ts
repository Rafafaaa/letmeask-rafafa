import styled from "styled-components";

export const QuestionStyles = styled.div`
  .question {
    background: ${props => props.theme.colors.primary};
    border-radius: 8px;
    padding: 24px;
    margin-top: 8px;

    p {
      color: ${props => props.theme.colors.color};
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: ${props => props.theme.colors.color};
          font-size: 14px;
        }
      }

      > div {
        display: flex;
        gap: 16px;
        align-items: flex-start;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          color: ${props => props.theme.colors.color};
          gap: 8px;

          &.liked {
            color: ${props => props.theme.colors.secondary};
            
            svg {
              animation: likeAnimation 0.2s linear;

              path {
                stroke: ${props => props.theme.colors.primary};
                fill: ${props => props.theme.colors.secondary};
              }
            }
          }
        }

        &.answered {
          color: ${props => props.theme.colors.secondary};
          
          svg {
            animation: likeAnimation 0.2s linear;

            circle {
              stroke: ${props => props.theme.colors.secondary};
              fill: ${props => props.theme.colors.secondary};
            }

            path {
              stroke: #DBDCDD;
              fill: transparent;
            }
          }
        }

        &.highlighted {
          color: ${props => props.theme.colors.secondary};
          
          svg {
            animation: likeAnimation 0.2s linear;

            path {
              stroke: transparent;
              fill: ${props => props.theme.colors.secondary};
            }
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }

    &.answered {
      background: ${props => props.theme.colors.answered};

      button {
        &.like-button {

          &.liked {
            color: ${props => props.theme.colors.secondary};
            
            svg {
              animation: likeAnimation 0.2s linear;

              path {
                stroke: ${props => props.theme.colors.answered};
                fill: ${props => props.theme.colors.secondary};
              }
            }
          }
        }
      }
    }

    &.highlighted {
      background: ${props => props.theme.colors.background};
      border: 1px solid ${props => props.theme.colors.secondary};

      footer .user-info span {
        color: ${props => props.theme.colors.color};
      }

      button {
        &.like-button {

          &.liked {
            color: ${props => props.theme.colors.secondary};
            
            svg {
              animation: likeAnimation 0.2s linear;

              path {
                stroke: ${props => props.theme.colors.background};
                fill: ${props => props.theme.colors.secondary};
              }
            }
          }
        }
      }
    }
  }

  @keyframes likeAnimation {
    50% {
      transform: scale(1.25, 1.25);
    }

    100% {
      transform: scale(1, 1);
    }
  }
`