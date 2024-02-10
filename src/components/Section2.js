import { Flex, Stack } from "@chakra-ui/react"
import bgImageSection2 from "../resources/images/bgImageIce2.jpg"
import CardServices from "./ServiceCard"
import CakeIcon from "../resources/icons/CakeIcon"
import WeddingIcon from "../resources/icons/wedding"
import BurgerIcon from "../resources/icons/BurgerIcon"

const rigthCards = [
  {
    title: "Wedding Cake",
    link: "https://www.instagram.com/stories/highlights/18149635792164017/",
    description:
      "Des gâteaux de marriage préparer avec amour pour rendre de votre marriage un moment innoubliable",
    icon: <WeddingIcon />,
  },
  {
    title: "Salés",
    link: "https://www.instagram.com/stories/highlights/18106443091344004/",
    description: "Mignardises et buffet salés sur mesure just pour vous!.",
    icon: <BurgerIcon />,
  },
]

const leftCards = [
  {
    title: "Cake Design",
    link: "https://www.instagram.com/stories/highlights/17856263129295080/",
    description:
      "Des gâteaux personnalisés délicieux pour embellir vos anniversaires.",
    icon: <CakeIcon />,
  },
]

export default function Section2() {
  return (
    <Flex
      as='section'
      position='relative'
      backgroundImage={`url(${bgImageSection2})`}
      color='white'
      width='full'
      className='smt'
      paddingBlock='120px'
      paddingInline={["0", "0", "0", "116px", "116px"]}
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment='fixed'
      backgroundPosition='top'
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
      id='about'
    >
      <Flex
        gridGap='10px'
        alignItems='center'
        flexWrap='wrap'
        justifyContent='center'
        alignContent='center'
      >
        {leftCards.map((card, key) => (
          <a href={card.link}>
            <CardServices
              key={key}
              alignSelf='center'
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </a>
        ))}
        <Stack direction='column' gridGap='10px'>
          {rigthCards.map((card, key) => (
            <a href={card.link}>
              <CardServices
                key={key}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            </a>
          ))}
        </Stack>
      </Flex>
    </Flex>
  )
}
