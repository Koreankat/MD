import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import bgImageSection3 from "../resources/images/bgImageIce3.jpg"
import PercentageCircle from "./PercentageCircle"

const ourSpeciality = [
  {
    name: "Wedding cakes",
    percentage: 97,
  },
  {
    name: "Cake Design",
    percentage: 100,
  },
  {
    name: "Salés et buffets",
    percentage: 95,
  },
]

export default function Section3() {
  return (
    <Flex
      as='section'
      position='relative'
      backgroundImage={`url(${bgImageSection3})`}
      color='#4F3832'
      width='full'
      className='smt'
      height={["auto", "auto", "auto", "740px", "740px"]}
      backgroundAttachment='fixed'
      backgroundPosition={["center", "center", "center", "inherit", "inherit"]}
      backgroundSize='cover'
      paddingBlock='120px'
      paddingInline={["0", "0", "0", "116px", "116px"]}
    >
      <Stack
        textTransform='capitalize'
        textAlign={["center", "center", "center", "left", "left"]}
        marginInline={["auto", "auto", "auto", "0", "0"]}
      >
        <Text
          as='span'
          color='white'
          fontFamily='heading'
          fontWeight='700'
          fontSize='body'
          lineHeight='1.2'
        >
          20 Ans et plus d'expérience
        </Text>
        <Heading as='h2' color='#4F3832' fontSize='40px'>
          Nos specialités
        </Heading>
        <Flex
          justifyContent='center'
          paddingBlockStart='74px'
          gridGap='12px'
          flexWrap='wrap'
        >
          {ourSpeciality.map((speciality, key) => (
            <PercentageCircle
              key={key}
              title={speciality.name}
              percentage={speciality.percentage}
            />
          ))}
        </Flex>
      </Stack>
    </Flex>
  )
}
