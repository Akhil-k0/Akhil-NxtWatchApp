import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const GamingMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const GamingContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
`

export const GamingMenuContainer = styled.div`
  height: 16vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f1f1f1'};
  @media screen and (max-width: 768px) {
    height: 12vh;
  }
`

export const IconContainer = styled.div`
  padding: 10px;
  border-radius: 40px;
  margin-right: 10px;
  margin-left: 60px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`

export const MenuHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    font-size: 24px;
    margin-left: 12px;
  }
`

export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`

export const FailureImg = styled.img`
  width: 80%;
  padding-top: 15px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`

export const VideosList = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 60px;
  @media screen and (max-width: 768px) {
    margin-left: 30px;
  }
`
