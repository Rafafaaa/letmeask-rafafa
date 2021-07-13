import styled from "styled-components";

export const RoomStyles = styled.div`
  #page-room {
    header {
      padding: 24px;

      .content {
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > img {
          max-height: 45px;
        }

        > div {
          display: flex;
          gap: 16px;

          > button {
            height: 40px;
          }
        }
      }
    }

    main {
      max-width: 800px;
      margin: 0 auto;

      .room-title {
        margin: 32px 0 24px;
        display: flex;
        align-items: center;

        h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
        }

        span {
          margin-left: 16px;
          background: linear-gradient(-90deg, #485BFF, #E559F9);
          color: #FFF;
          border-radius: 9999px;
          padding: 8px 16px;
          font-weight: 500;
          font-size: 14px;
        }
      }

      form {
        textarea {
          width: 100%;
          border: 0;
          padding: 16px;
          border-radius: 8px;
          background: ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.color};
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
          resize: vertical;
          min-height: 130px;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 16px;

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
              font-weight: 500;
              font-size: 14px;
            }
          }

          > span {
            font-size: 14px;
            color: ${props => props.theme.colors.color};
            font-weight: 500;

            button {
              background: transparent;
              border: 0;
              color: #485BFF;
              text-decoration: underline;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
            }
          }
        }
      }

      .question-list {
        margin-top: 32px;
      }
    }
  }
`