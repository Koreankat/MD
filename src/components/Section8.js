import { Flex, Text, Heading, Stack } from "@chakra-ui/react"
import bgImageSection8 from "../resources/images/bgImageIce8.jpg"
import OrderForm from "./OrderForm"
import Button from "./ButtonBlob"
export default function Section8() {
  return (
    <Flex
      position='relative'
      backgroundImage={`url(${bgImageSection8})`}
      color='white'
      width='full'
      backgroundAttachment='fixed'
      className='smt'
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize='cover'
      id='orderNow'
      justifyContent={[
        "center",
        "center",
        "center",
        "center",
        "flex-end",
        "flex-end",
      ]}
      paddingBlock='120px'
      paddingInline={["20px", "20px", "20px", "116px", "116px"]}
    >
      <Stack
        textAlign={["center", "center", "center", "left", "left"]}
        maxWidth='512px'
        minWidth='260px'
        gridGap='16px'
      >
        <Heading as='h4' fontSize='40px' textTransform='capitalize'>
          Passez votre commande
        </Heading>
        <Text lineHeight='28px'>
          Vous êtes a deux pas pour transformer vos événements et célébrations
          en moments magiques
        </Text>
        <OrderForm />
        <Heading as='h5'>
          Ou commandez par whatsapp
          <Button
            textTransform='capitalize'
            color='charlestonGreen.900'
            backgroundColor='#25D366'
            blobColor='candyPink.900'
            type='submit'
            _before='none'
            margin='10px'
            _hover={{ color: "white" }}
            _focus={{ color: "white" }}
          >
            Contacter
          </Button>
        </Heading>{" "}
      </Stack>
    </Flex>
  )
}
