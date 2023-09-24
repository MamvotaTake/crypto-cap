import styled from 'styled-components'
import React from 'react'
import {
  HiArrowDownRight,
  HiArrowRight,
  HiArrowUpRight,
  HiCheckBadge,
  HiMiniPlayCircle,
  HiMiniShieldCheck
} from 'react-icons/hi2'
import { FaBitcoin } from 'react-icons/fa'
import bgAbove from '../assets/bg-above.png'
import bgFeatures from '../assets/bg-features.png'
import Button from '../components/button/Button'
import Row from '../components/Row'
import Card from '../components/cards/Card'
import Divider from '../components/Divider'
import Heading from '../components/Heading'
import ButtonIcon from '../components/button/ButtonIcon'
import CryptoTableOperations from '../components/CryptoTableOperations'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgAbove});
  /* background-color: #000a09;
  filter: blur(1); */
  gap: 2.5rem;
`

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bgAbove});
  gap: 4.2rem;
  padding: 1.2rem;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2.5rem;
  margin-top: 8rem;
`

const Paragraph = styled.p`
  display: flex;
  width: 32rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: var(--font-color-subtitle-color, #4d625f);
  text-align: center;
`

const H1 = styled.h1`
  flex: 1 1 0;
  color: var(--font-color-title-color, #0d3e36);
  text-align: center;
  align-items: center;

  /* Heading/Heading 3 */
  font-family: "Raleway";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75rem;
`

const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  gap: .7rem;
`

const Coin = styled.p`
  color: #11011e;
  font-family: "Raleway";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`
const Currency = styled.p`
  display: flex;
  padding: 0.25rem 0.375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  background: rgba(198, 198, 198, 0.40);
`

const Rates = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  margin-top: 0.5rem;
`

const ChartImage = styled.img`
  width: 9.25rem;
  height: 7.32944rem;
`

const Price = styled.p`
  color: #11011e;
  font-family: "Roboto";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const Percentage = styled.span`
  color: grey;
  font-family: "Roboto";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 1.8rem */
  margin-top: .7rem;
`

const Trends = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
  overflow: hidden;
  padding: 3rem 5.625rem;
  /* scroll-behavior: smooth;
    scrollbar-arrow-color: red; */
`

const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgFeatures});
  padding: 3rem 5.625rem;
`

const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
`

const SeeMoreLink = styled.p`
  color: var(--high-fidelity-color-primary-color, #0fae96);
  display: flex;
  gap: 0.3rem;
  margin-top: 1.5rem;

  /* Label/Label 1 - Medium */
  font-family: "Raleway";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`

const LearnContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 3.75rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  border: 1px solid var(--wireframe-color-light-grey, #eaeaea);
  margin: 0 auto;
  margin-top: 7rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`

const CryptoCategoryContainer = styled.div`
    padding: 3rem 5.625rem;

    p{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`

function Home () {
  return (
    <StyledHome>
      <HeroSection>
        <HeroContent>
          <Heading as='h1'>Start and Build Your Crypto Portfolio Here</Heading>
          <Paragraph>
            Only at CryptoCap, you can build a good portfolio and learn best
            practices about cryptocurrency.
          </Paragraph>
          <Button>Get started</Button>
        </HeroContent>

        <Row>
          <Trends>
            <h1>Market Trend</h1>
            <Row type='horizontal'>
              <Card>
                <CoinInfo>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/1ecd/8325/658f45911e28e94afb85f3aba3ea38c4?Expires=1696204800&Signature=c7D91gL9~uREcHqYte74SYDb3KehGqgAB5S6zIS5~4ES~LhAlhwVc0Jcq592m6UMC~9GExrfvUr-QGLSKbA~QAubhFdQOpqmtH6Zbxa7jdK5tkwQXB4OHHCEV2jLsp330P4Vd6pKT-k4SnzEZ~JQb0WdT0Dk4fO21YLTbGzT8~9HUicAOKyMWvvu9dvn7uvdSp4EHT1sQD3B8~aQb5QkVIRgTVblWKAvZWwfMHracU21JpPp-5tZQtYLNnSU54fO8-aV9SHxJsywvoUnYMf7YhppQ~7V4sRB785401onIjFsFCxcXvgdgPEjfdKjUkbydlrWArZNxUYgOp27jo8y7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt='icon'
                  />
                  <Coin>BTC</Coin>
                  <Currency>BITCOIN</Currency>
                  <HiArrowUpRight />
                </CoinInfo>
                <Divider />
                <Rates>
                  <div>
                    <Price>$56,623.54</Price>

                    <Percentage>1.41%</Percentage>
                  </div>
                  <ChartImage
                    src='https://s3-alpha-sig.figma.com/img/b3bb/7175/fcd914cb1c8155cb8d7264f440e6fd65?Expires=1696204800&Signature=dmsEPt8EH~KPKjd77iI-H7KFoRVHy01tjBnzj7aZTptWWwiXXP1JouYjiH56hIL6v~t~x-YElN2ED6Nhvj9OcQWjnZir8bu4Ph39IaCJ7Zh~tLOhzCaEpEYZjScdNcXHMy7gIbcqIV8Fk~g-gmXKkP70e2QWx2FBiMZPIrMfT0cpCGbvDWwmtAC2lj-cHmXFZbhakFoFKNksYUNX-OwiWUUjqwqu0oXuYR-bcA7mbwDWnemz4G6Csx7OBSRcW~oksVoAiNbzzMl9VAHUaIx0z3HrBo8erESfm-w6LMQfQKPOx-eCNuEupz-DVa20Qb~a5Zi4rMAApf~hq6gYX40SQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt=''
                  />
                </Rates>
              </Card>
              <Card>
                <CoinInfo>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/f9cc/f4c1/f6000533e0fa435d93f8cda0150d58b6?Expires=1696204800&Signature=j6IeIX0smq7dvRgQIgJb7n2mZDKnh5Da5Mk68M-tDeh2U9A-v6sTUK1nuXLNDaBq7AlfDs3B2L4m9MSD2JQ0dRqBdzXg9nZVOkUOSSLeknaT5ixe2kSjSmiOzsJksX-pXLC63lM8-Ey56VGYOguCJKaAAdzZS-toCBSiKvgVxiS6wAXPM93pkr6kx0C~eJ3V0gJdbUwgr1BtJf4rtjKZMclUzFOLAhUq5PjO~7D9GP-cTRE9bFHLyRgfa50wpJedylr5eWDO7MV75TtrnRxCzMbvPE7BE12I6C1eRgenX0wqDCgdIUQiNDQylXvBXwnZLtVUM4n3MZZw1NQ4BymHfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt='icon'
                  />
                  <Coin>ETH</Coin>
                  <Currency>ETHEREUM</Currency>
                  <HiArrowUpRight />
                </CoinInfo>
                <Divider />
                <Rates>
                  <div>
                    <Price>$4,267.90</Price>

                    <Percentage>2.22%</Percentage>
                  </div>
                  <ChartImage
                    src='https://s3-alpha-sig.figma.com/img/b3bb/7175/fcd914cb1c8155cb8d7264f440e6fd65?Expires=1696204800&Signature=dmsEPt8EH~KPKjd77iI-H7KFoRVHy01tjBnzj7aZTptWWwiXXP1JouYjiH56hIL6v~t~x-YElN2ED6Nhvj9OcQWjnZir8bu4Ph39IaCJ7Zh~tLOhzCaEpEYZjScdNcXHMy7gIbcqIV8Fk~g-gmXKkP70e2QWx2FBiMZPIrMfT0cpCGbvDWwmtAC2lj-cHmXFZbhakFoFKNksYUNX-OwiWUUjqwqu0oXuYR-bcA7mbwDWnemz4G6Csx7OBSRcW~oksVoAiNbzzMl9VAHUaIx0z3HrBo8erESfm-w6LMQfQKPOx-eCNuEupz-DVa20Qb~a5Zi4rMAApf~hq6gYX40SQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt=''
                  />
                </Rates>
              </Card>
              <Card>
                <CoinInfo>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/fb3f/f6cd/6a4f37973ef36031322d0545d203755c?Expires=1696204800&Signature=q7~9EbgN9JzIDgnBWAWxtQJ6lNVppDVaQLcRkw~0ZPf2614sFl9Cgs9Ds0GkwMDF6wLcQPIjF8RO28FwF9PjfxVEs4nfJdLARZWTxomG~-ZW5y~iNfUYalhMH1jCVfhSJ69byys2SUVSkjuJ6jcA1G1JSGmAEoQx1x~n4xFB1g7T8YvJ4DKl6J~H755nn-ZsULVJlkB418EkFBbLldOmvVEE2xD1gt~EGERyq0LcdxeBxTApOTMbxRTDXBhQADmM~0-bqC0ZA8oWMVdoa6CEeaWFFVPfAWeWp7TgI1C-DaZDxfsRjiWHr5bE3GB0faO064lhv79CZtDsqxtt58EuTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt='icon'
                  />
                  <Coin>BNB</Coin>
                  <Currency>BINANCE</Currency>
                  <HiArrowUpRight />
                </CoinInfo>
                <Divider />
                <Rates>
                  <div>
                    <Price>$587.74</Price>

                    <Percentage>0.82%</Percentage>
                  </div>
                  <ChartImage
                    src='https://s3-alpha-sig.figma.com/img/b3bb/7175/fcd914cb1c8155cb8d7264f440e6fd65?Expires=1696204800&Signature=dmsEPt8EH~KPKjd77iI-H7KFoRVHy01tjBnzj7aZTptWWwiXXP1JouYjiH56hIL6v~t~x-YElN2ED6Nhvj9OcQWjnZir8bu4Ph39IaCJ7Zh~tLOhzCaEpEYZjScdNcXHMy7gIbcqIV8Fk~g-gmXKkP70e2QWx2FBiMZPIrMfT0cpCGbvDWwmtAC2lj-cHmXFZbhakFoFKNksYUNX-OwiWUUjqwqu0oXuYR-bcA7mbwDWnemz4G6Csx7OBSRcW~oksVoAiNbzzMl9VAHUaIx0z3HrBo8erESfm-w6LMQfQKPOx-eCNuEupz-DVa20Qb~a5Zi4rMAApf~hq6gYX40SQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt=''
                  />
                </Rates>
              </Card>
              <Card>
                <CoinInfo>
                  <img
                    src='https://s3-alpha-sig.figma.com/img/47fa/c427/0c3aa5df7817fa1a3cf3ab77bded02ef?Expires=1696204800&Signature=eEp7DGP1PaHB~5Y0V2JH0WCewVcg9KvCUhxM4VHYujmjBG2gBu4CfkMGtbs8k~dVEXw35D3SXN-Sq58G4LI9puq9~FNY0BGJw18M8UpCvfiNnONplwWiEhjUkhIGDWLk~ChF-KHPrHd3j~BN~S~yQgo6LxVlrm0kdkaaD8wiBggnJB3-sdUTaquiM7WM-DKBrse4TIYcZlhlIvwFQDVmjvYFSbR99fgi4JQjJfvXJgmi1yEVfyd02If2eWZzPKA7Me3JnTlF185zUh7PdDrxJuPxwt3zRNCRmR5ZRpkf9F7VnqVDViILIFmh2wQxtp3xW6vfB6viG27Qw611Yvotdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt='icon'
                  />
                  <Coin>USDT</Coin>
                  <Currency>TETHER</Currency>
                  <HiArrowUpRight />
                </CoinInfo>
                <Divider />
                <Rates>
                  <div>
                    <Price>$0.9998</Price>

                    <Percentage>0,03%</Percentage>
                  </div>
                  <ChartImage
                    src='https://s3-alpha-sig.figma.com/img/b3bb/7175/fcd914cb1c8155cb8d7264f440e6fd65?Expires=1696204800&Signature=dmsEPt8EH~KPKjd77iI-H7KFoRVHy01tjBnzj7aZTptWWwiXXP1JouYjiH56hIL6v~t~x-YElN2ED6Nhvj9OcQWjnZir8bu4Ph39IaCJ7Zh~tLOhzCaEpEYZjScdNcXHMy7gIbcqIV8Fk~g-gmXKkP70e2QWx2FBiMZPIrMfT0cpCGbvDWwmtAC2lj-cHmXFZbhakFoFKNksYUNX-OwiWUUjqwqu0oXuYR-bcA7mbwDWnemz4G6Csx7OBSRcW~oksVoAiNbzzMl9VAHUaIx0z3HrBo8erESfm-w6LMQfQKPOx-eCNuEupz-DVa20Qb~a5Zi4rMAApf~hq6gYX40SQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                    alt=''
                  />
                </Rates>
              </Card>
            </Row>
          </Trends>
        </Row>
      </HeroSection>
      <StyledFeature>
        <FeaturedContent>
          <Heading as='h1'>CryptoCap Amazing Features</Heading>
          <Paragraph>
            Explore sensational features to prepare your best investment in
            cryptocurrency
          </Paragraph>
        </FeaturedContent>
        <FeaturesContainer>
          <Row type='horizontal'>
            <Card>
              <ButtonIcon>
                <HiCheckBadge />
              </ButtonIcon>
              <Heading as='h3'>Manage Portfolio</Heading>
              <p>
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
            <Card>
              <ButtonIcon>
                <HiMiniShieldCheck />
              </ButtonIcon>
              <Heading as='h3'>Protected Securely</Heading>
              <p>
                All cash balances are covered by FDIC insurance, up to a maximum
                of $250,000.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
            <Card>
              <ButtonIcon>
                <FaBitcoin />
              </ButtonIcon>
              <Heading as='h3'>Cryptocurrency Variety</Heading>
              <p>
                Supports a variety of the most popular digital currencies and
                always uptodate.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
            <Card>
              <ButtonIcon>
                <HiMiniPlayCircle />
              </ButtonIcon>
              <Heading as='h3'>Learn Best Practice</Heading>
              <p>
                Easy to know how to cryptocurrency works and friendly to newbie.
              </p>
              <SeeMoreLink>
                see more
                <span>
                  <HiArrowRight />
                </span>
              </SeeMoreLink>
            </Card>
          </Row>
        </FeaturesContainer>

        <LearnContainer>
          <div>
            <Heading>New In Cryptocurrency?</Heading>
            <p>
              We&apos;ll tell you what cryptocurrencies are, how they work and
              why you should own one right now. So let&apos;s do it.
            </p>
          </div>
          <Button size='medium'>Learn & Explore Now</Button>
        </LearnContainer>

      </StyledFeature>
      <CryptoCategoryContainer>
        <Heading>Market Update</Heading>
        <p>Cryptocurrency Categories</p>
        <CryptoTableOperations />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </CryptoCategoryContainer>
    </StyledHome>
  )
}

export default Home
