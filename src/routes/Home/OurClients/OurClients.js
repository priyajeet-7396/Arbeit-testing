  import React from "react";
  import styled, { keyframes, css } from "styled-components";
  import client1 from "../../../assets/sponsors/client1.png";
  import client2 from "../../../assets/sponsors/client2.png";
  import client3 from "../../../assets/sponsors/client3.png";
  import client4 from "../../../assets/sponsors/client4.png";
  import client5 from "../../../assets/sponsors/client5.png";
  import client6 from "../../../assets/sponsors/client6.png";
  import client7 from "../../../assets/sponsors/client7.png";
  import client8 from "../../../assets/sponsors/client8.png";
  import client9 from "../../../assets/sponsors/client9.png";
  import client10 from "../../../assets/sponsors/client10.png";


  function App() {
    const row1 = [ client1, client2, client3, client4, client5

    ];

    const row2 = [ client6, client7, client8, client9, client10

    ];

    return (
      <MobileQuery>
      <AppContainer>
        <Wrapper>
          <Text>Our Clients</Text>
          <Note>Our company takes pride in building strong relationships with our customers and forming strategic partnerships in the technology and HR consulting space.</Note>
          <Marquee>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {row1.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
            <MarqueeGroup2>
              {row2.map((el) => (
                <ImageGroup>
                  <Image src={el} />
                </ImageGroup>
              ))}
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </AppContainer>
      </MobileQuery>
    );
  }

  export default App;

  const AppContainer = styled.div`
    width: 95vw;
    height: 70vh;
    color: #000000;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 600px) {
    padding: 20px;
  }
  `;

  const Wrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  `;

  const Text = styled.div`
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 10px;
    color: steelblue;

  `;

  const Note = styled.div`
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 40px;
    color: #7c8e9a;

  `;

  const Marquee = styled.div`
    display: flex;
    width: 1200px;
    overflow: hidden;
    user-select: none;


    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );



  `;

  const scrollX = keyframes`
    from {
      left: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `;

  const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    width: 100%;
    animation: ${scrollX} 30s linear infinite;



  `;

  const MarqueeGroup = styled.div`
    ${common}
  `;
  const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction: reverse;
    animation-delay: -3s;
  `;

  const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);


  


  `;

  const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    ${'' /* border: 1px solid black; */}
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px 20px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    
  @media (max-width: 600px) {
    padding: 2px;
  }
  `;



  const MobileQuery = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;

    ${AppContainer} {
      height:50vh;
    }

    ${Marquee} {
      width: 100%;
    }

    ${MarqueeGroup}, ${MarqueeGroup2} {
      animation: ${scrollX} 10s linear infinite;
    }

    ${ImageGroup} {
      width: 100%;
      padding: 5px;
    }


  }
`;
