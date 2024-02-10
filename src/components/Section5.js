import React from "react"
import { Flex, Heading, Stack, Text } from "@chakra-ui/react"
import bgImageSection1 from "../resources/images/bgImageIce.jpg"
import Button from "./ButtonBlob"

export default function Section5() {
  return (
    <Flex
      className='smt'
      as='section'
      position='relative'
      backgroundImage={`url(${bgImageSection1})`}
      color='white'
      width='full'
      height='740px'
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize={["auto", "auto", "auto", "cover", "cover"]}
      id='gallery'
      paddingInline={["16px", "16px", "16px", "116px", "116px"]}
    >
      <Stack
        justifyContent='center'
        marginInline='auto'
        alignItems={["center", "center", "center", "flex-start", "flex-start"]}
        textAlign={["center", "center", "center", "left", "left"]}
        direction='column'
        width={["300px", "300px", "400px", "full", "full"]}
      >
        <Heading
          as='h3'
          color='charlestonGreen.900'
          fontSize={["3rem", "3rem", "4rem", "5rem", "5rem"]}
          lineHeight='1.2em'
          zIndex='2'
        >
          L'innovation à travers le <br /> CAKE DESIGN.
        </Heading>
        <Text
          color='charlestonGreen.900'
          lineHeight='30px'
          letterSpacing='0.2px'
          marginBlockEnd='36px !important'
          fontWeight='700'
        >
          Le plus beau jour de votre vie mérite un gâteau exceptionnel.
          <br />
          Nous créons des chefs-d'œuvre qui éblouissent et enchantent vos
          invités.
        </Text>
        <a href='https://api.whatsapp.com/send/?phone=212669907968&text&type=phone_number&app_absent=0'>
          <Button
            color='charlestonGreen.900'
            textTransform='uppercase'
            blobColor='charlestonGreen.900'
            width='auto'
            _before={{
              zIndex: 1,
              left: 0,
              top: 0,
              border: "2px solid",
              borderColor: "charlestonGreen.900",
              position: "absolute",
              content: `""`,
              width: "full",
              height: "full",
              borderRadius: "3xl",
            }}
            _hover={{
              color: "white",
            }}
            _focus={{
              color: "white",
            }}
          >
            Commander maintenant
          </Button>
        </a>
      </Stack>
    </Flex>
  )
}
