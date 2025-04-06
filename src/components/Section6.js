import { Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react"
import bgImageSection6 from "../resources/images/bgImageIce6.jpg"
import EventPricingCard from "./EventPricingCard"

const cards = {
  design: {
    category: "Cake Design",
    price: "60",
    services: [
      "Suisse praliné",
      "Molly crème meringue",
      "Ganache au chocolat",
      "croquant et croustillant",
      "amandes caramélisées",
    ],
    description: "À partir de 8 personnes",

    button: "Commander",
  },
  wedding: {
    category: "Wedding Cake",
    price: "60",
    services: [
      "Suisse praliné",
      "Molly crème meringue",
      "Ganache au chocolat",
      "croquant et croustillant",
      "amandes caramélisées",
    ],
    description: "À partir de 15 personnes",
    subdescription: "et 50Dhs à partir de 25 personnes",
    button: "Commander",
  },
  sale: {
    category: "Buffet salés",
    price: "Personnalisé",
    services: ["Mignardises", "Burger", "Verrines", "Pizza", "Pastilla", "..."],

    button: "En savoir plus",
  },
}

export default function Section6() {
  return (
    <Flex
      position='relative'
      backgroundImage={`url(${bgImageSection6})`}
      color='white'
      width='full'
      as='section'
      paddingBlock='120px'
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment='fixed'
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id='pricing'
      justifyContent={["center", "center", "center", "center", "flex-end"]}
      className='smt'
      paddingInline={["16px", "16px", "16px", "116px", "16px"]}
    >
      <Stack alignItems='center' textAlign='center'>
        <Heading as='h3' fontSize='3rem' color='white'>
          Nos Gateaux
        </Heading>
        <SimpleGrid gridRowGap='30px' columns={[1, 1, 1, 3, 3]}>
          <EventPricingCard
            cards={cards.design}
            borderRight={[
              "none",
              "none",
              "none",
              "dashed 1px white",
              "dashed 1px white",
            ]}
          />
          <EventPricingCard
            cards={cards.wedding}
            borderRight={[
              "none",
              "none",
              "none",
              "dashed 1px white",
              "dashed 1px white",
            ]}
          />
          <EventPricingCard cards={cards.sale} />
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}
