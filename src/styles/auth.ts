import styled from "styled-components";

export const AuthStyles = styled.div`
  #page-auth {
    display: flex;
    align-items: stretch;
    height: 100vh;

    aside {
      flex: 7;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 120px 80px;

      img {
        max-width: 320px;
      }

      strong {
        font: 700 36px 'Poppins', sans-serif;
        line-height: 42px;
        margin-top: 16px;
      }

      p {
        font-size: 24px;
        line-height: 32px;
        margin-top:  16px;
      }
    }

    main {
      flex: 8;

      padding: 0 32px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;

      > img {
        align-self: center;
      }

      h2 {
        font-size: 24px;
        margin: 64px 0 24px 0;
        font-family: 'Poppins', sans-serif;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: ${props => props.theme.colors.primary};
          border: 0px solid ${props => props.theme.colors.color};
          color: ${props => props.theme.colors.color};
        }

        button {
          margin-top: 16px;
        }

        button, input {
          width: 100%;
        }
      }

      p {
        font-size: 14px;
        color: ${props => props.theme.colors.color};
        margin-top: 16px;

        a {
          color: #485BFF;
        }
      }
    }
    
    .create-room {
      margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #EA4335;
      color: #FFF;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      border: 0;

      transition: filter 0.2s;

      img {
        margin-right: 8px;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .separator {
      font-size: 14px;

      margin: 32px 0;
      display: flex;
      align-items: center;

      &::before {
        content: '';
        flex: 1;
        height: 1px;
        background: ${props => props.theme.colors.color};
        margin-right: 16px;
      }

      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: ${props => props.theme.colors.color};
        margin-left: 16px;
      }
    }
  }
`