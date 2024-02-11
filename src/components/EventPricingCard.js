import {
  Flex,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react"
import React from "react"
import Button from "./ButtonBlob"

export default function EventPricingCard({ cards, ...rest }) {
  return (
    <Stack
      paddingInline='40px'
      alignItems='center'
      textAlign='center'
      {...rest}
    >
      <Heading
        as='h3'
        borderBottom='dashed 1px #FFFFFF'
        fontSize='26px'
        textTransform='capitalize'
        paddingBlockEnd='4px'
      >
        {cards.category}
      </Heading>
      <Text paddingBlockStart='27px' fontWeight='700'>
        {cards.description}
      </Text>
      <Text paddingBlockStart='27px' fontWeight='700'>
        {cards.subdescription}
      </Text>
      {cards.category.includes("Buffet") ? (
        <Heading paddingBlockStart='24px' fontSize='38px' as='h6'>
          {cards.price}
          <Text as='span' fontSize='14px'></Text>
        </Heading>
      ) : (
        <Heading paddingBlockStart='24px' fontSize='38px' as='h6'>
          {cards.price}Dhs
          <Text as='span' fontSize='14px'>
            / par personne
          </Text>
        </Heading>
      )}

      <UnorderedList
        marginInlineStart='0 !important'
        styleType='none'
        paddingBlockStart='22px'
        spacing='12px'
      >
        {cards.services.map((service, key) => (
          <ListItem key={key}>{service}</ListItem>
        ))}
      </UnorderedList>
      <Flex
        justifyContent='center'
        marginBlockStart='34px'
        width='100px'
        marginInline='auto'
      >
        <a href='https://api.whatsapp.com/send/?phone=212669907968&text&type=phone_number&app_absent=0'>
          <Button height='44px' textTransform='capitalize'>
            {cards.button}
          </Button>
        </a>
      </Flex>
    </Stack>
  )
}
