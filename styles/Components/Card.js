import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 8px;
  ${props => props.featured ? {
    borderRadius: '0 8px 8px 0',
    borderLeft: '4px solid hsl(180, 29%, 50%)'
  } : null}
  box-shadow: 0px 5px 10px hsl(180, 29%, 50%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  div#info {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 12px;
      width: 74px; 
      height: 74px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      div#jobInfo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 5px;

      span#cia-name {
        color: hsl(180, 29%, 50%);
        font-weight: 600;
        margin-right: 10px;
      }

      span#new-job {
        font-size: 12px;
        color: #fff;
        font-weight: 800;
        margin-right: 8px;
        background-color: hsl(180, 29%, 50%);
        padding: 7px;
        border-radius: 12px;
      }

      span#featured {
        font-size: 12px;
        color: #fff;
        font-weight: 800;
        background-color: hsl(180, 14%, 20%);
        padding: 7px;
        border-radius: 12px;
      }
    }
  
      p {
        color: hsl(180, 14%, 20%);
        font-weight: 700;
        font-size: 1.2rem;
        margin-bottom: 5px;
      }
  
      span#details {
        color: hsl(180, 8%, 52%);
      }
    }
  }


    ul#requirements {
      list-style: none;
      display: flex;
      
      li {
        padding: 8px;
        background-color: hsl(180, 31%, 95%);
        color: hsl(180, 29%, 50%);
        font-weight: 700;
        border-radius: 3px;
      }

      li ~ li {
        margin-left: 8px;
      }
    }
`;