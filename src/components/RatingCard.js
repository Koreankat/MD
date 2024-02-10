import { Flex, Image, Stack, Text } from "@chakra-ui/react"
import StarIcon from "../resources/icons/StarIcon"

export default function RatingCard({ data, img }) {
  return (
    <Stack
      borderRadius='2xl'
      boxShadow='lg'
      alignItems='center'
      backgroundColor='white'
      maxHeight='350px'
      minHeight='320px'
      maxWidth='374px'
      minWidth='300px'
      margin={["30px", "0"]}
      position='relative'
      paddingBlockStart='30px'
      paddingInline='26px'
    >
      <Text
        color='charlestonGreen.900'
        textAlign='center'
        lineHeight='30px'
        fontWeight='700'
      >
        {data.description}
      </Text>
      <Text
        as='time'
        display='block'
        marginBlockStart='20px'
        textAlign='center'
        dateTime={new Date(data.created_at)}
        color='charlestonGreen.900'
        fontSize='14px'
        marginInline='auto'
      >
        <i>{data.created_at}</i>
      </Text>
      <Flex
        color='charlestonGreen.900'
        width='100px'
        gridGap='4px'
        marginInline='auto'
        marginBlockStart='20px'
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} />
        ))}
      </Flex>
      <a href='https://www.instagram.com/stories/highlights/17913785095437444/'>
        <Text color='red' textAlign='center' lineHeight='30px' fontWeight='700'>
          Voir
        </Text>
      </a>
      <Image
        objectFit='fill'
        boxShadow='lg'
        border='solid 1px white'
        position='absolute'
        borderRadius='full'
        height='120px'
        width='120px'
        backgroundColor='red.100'
        bottom='-46px'
        transform='translateX(-50%)'
        left='50%'
        src={img}
      />
    </Stack>
  )
}
