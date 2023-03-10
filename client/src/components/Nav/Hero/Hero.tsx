import styled from "styled-components";
import {Container} from "react-bootstrap"
import ModalComponent from "../../Modal/Modal";
const HeroComponent = styled.header`  
padding: 5rem 0;
height: 90vh;
background-image:url("https://images.unsplash.com/photo-1452697620382-f6543ead73b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
background-size: cover;
background-position: center;`;

const HeaderContainer = styled.div`
background-color: rgb(5, 148, 112);
padding: 3rem;
color: white;
width: 32.5rem;`;

const Heading =styled.h1`
font-size: 5 rem`;

const SubHeading = styled.h3`
  margin: 1rem 0;
  font-weight: 400;
`;
const Hero =()=>{
    return(
    <HeroComponent>
      <Container>
    <HeaderContainer >
      <Heading>
       Feed your mind with the best
      </Heading>
      <SubHeading>
      Grow, learn, and become more successful by reading some of the top
            article by highly reputable individuals
      </SubHeading>
      <ModalComponent text="Signup" variant="primary" isSignupFlow={true}/>
      <ModalComponent text="Login" variant="danger" isSignupFlow={false}/>
    </HeaderContainer >
    </Container>
    </HeroComponent>
    );
    };
export default Hero;