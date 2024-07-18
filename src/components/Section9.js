import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import bgImageSection9 from "../resources/images/bgImageIce9.jpg"
import ContainerSocialNetworks from "./ContainerSocialNetwokrs"

const data = [
  { title: "Mobile", description: "06 69 90 79 68" },
  { title: "Email", description: "maisondelices2023@gmail.com" },
]

export default function Section9() {
  return (
    <Flex
      position='relative'
      backgroundImage={`url(${bgImageSection9})`}
      color='white'
      width='full'
      height='740px'
      className='smt'
      backgroundAttachment='fixed'
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize='cover'
      textAlign={["center", "center", "center", "left", "left"]}
      textTransform='capitalize'
      paddingInline={["0", "0", "0", "120px", "120px"]}
      paddingBlockStart='116px'
    >
      <Stack marginInline={["auto", "auto", "auto", "0", "0"]}>
        <Heading as='h4' fontSize='50px'>
          Cake Design ~ La Maison Des Délices
        </Heading>
        <Stack gridGap='20px'>
          <Text>117 Avenue stendhal, Casablanca.</Text>
          {data.map((info, key) => (
            <Text
              textTransform='initial'
              key={key}
            >{`${info.title}: ${info.description}`}</Text>
          ))}
          <Flex
            gridGap='20px'
            justifyContent={["center", "center", "center", "left", "left"]}
          >
            <ContainerSocialNetworks />
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  )
}
