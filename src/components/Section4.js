import { Flex } from "@chakra-ui/react"
import bgImageSection4 from "../resources/images/bgImageIce4.jpg"
import CardEvents from "./EventCard"
import CakeIcon from "../resources/icons/CakeIcon"
import SmileBeamIcon from "../resources/icons/SmileBeamIcon"
import GlassCheersIcon from "../resources/icons/GlassCheersIcon"
import StarIcon from "../resources/icons/StarIcon"
import CocktailIcon from "../resources/icons/CocktailIcon"

const statistics = [
  {
    title: "Commandes",
    icon: <StarIcon />,
    count: "923",
  },
  {
    title: "Client satisfaits",
    icon: <SmileBeamIcon />,
    count: "670",
  },
  {
    title: "Marriages",
    icon: <GlassCheersIcon />,
    count: "120",
  },
  {
    title: "Gâteaux personnalisés",
    icon: <CakeIcon />,
    count: "750",
  },
  {
    title: "Fête d'anniversaire",
    icon: <CocktailIcon />,
    count: "420",
  },
]

export default function Section4() {
  return (
    <Flex
      as='section'
      position='relative'
      backgroundImage={`url(${bgImageSection4})`}
      color='white'
      height={["auto", "auto", "auto", "740px", "740px"]}
      paddingBlock='120px'
      className='smt'
      width='full'
      justifyContent={["center", "center", "center", "flex-end", "flex-end"]}
      backgroundAttachment='fixed'
      backgroundPosition={["bottom", "bottom", "bottom", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      paddingInlineEnd={["0", "0", "0", "116px", "116px"]}
    >
      <Flex
        alignItems='center'
        gridGap='40px'
        alignContent='center'
        justifyContent='center'
        flexWrap='wrap'
        maxWidth='600px'
      >
        {statistics.map((statistic, key) => (
          <CardEvents key={key} statistic={statistic} />
        ))}
      </Flex>
    </Flex>
  )
}
