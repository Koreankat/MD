import {
  FormControl,
  Input,
  InputGroup,
  Textarea,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import emailjs from "emailjs-com"

import Button from "./ButtonBlob"

const inputs = [
  {
    label: "Sujet",
    type: "text",
    id: "from_name",
    name: "from_name",
  },
  { label: "Votre nom", type: "text", id: "user_name", name: "user_name" },
  { label: "Votre email", type: "email", id: "user_email", name: "user_email" },
  { label: "Téléphone", type: "phone", id: "from_num", name: "from_num" },
]

export default function OrderForm() {
  const toast = useToast()

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    from_name: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const emailjsParams = {
      service_id: "service_k5douhi",
      template_id: "template_xgoeijp",
      user_id: "4AFUO7Ua2XiLUj_hH", // Optional: if you have a user ID
    }
    emailjs
      .sendForm(
        emailjsParams.service_id,
        emailjsParams.template_id,
        e.target,
        emailjsParams.user_id
      )
      .then(
        (result) => {
          console.log(result.text)
          toast({
            title: `Hi, ${formValues.name} your order has been taken`,
            containerStyle: {
              "&>div": {
                backgroundColor: "candyPink.900",
                alignItems: "center",
              },
            },
            status: "success",
            position: "bottom-right",
          })

          setFormValues({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        },
        (error) => {
          console.log(error.text)
          toast({
            title: "Error",
            description: "Message could not be sent. Please try again later.",
            status: "error",
            position: "bottom-right",
          })
        }
      )
  }

  return (
    <FormControl as='form' onSubmit={handleSubmit} marginBlockStart='36px'>
      <InputGroup variant='flushed' flexDirection='column' gridGap='12px'>
        {inputs.map((input, key) => (
          <Input
            key={key}
            required
            id={input.id}
            name={input.name}
            autoComplete={input.name}
            value={formValues[input.name]}
            type={input.type}
            onChange={handleChange}
            placeholder={input.label}
            _placeholder={{ color: "white" }}
            paddingInline='6px'
            _focus={{
              borderColor: "candyPink.900",
              boxShadow: " 0px 1px 0px 0px #EF7474",
            }}
            _autofill={{
              textFillColor: "#ffff",
              boxShadow: "0 0 0px 1000px #EF7474 inset",
              borderRadius: "6px",
              borderColor: "candyPink.900",
            }}
          />
        ))}
      </InputGroup>
      <Textarea
        paddingBlockStart='20px'
        placeholder='Detail de commande'
        name='message'
        required
        value={formValues.message}
        onChange={handleChange}
        marginBlockEnd='40px'
        variant='flushed'
        borderRadius='none'
        _placeholder={{ color: "white" }}
        _focus={{
          borderColor: "candyPink.900",
          boxShadow: " 0px 1px 0px 0px #EF7474",
        }}
      />
      <Button
        textTransform='capitalize'
        color='charlestonGreen.900'
        backgroundColor='white'
        blobColor='candyPink.900'
        type='submit'
        _before='none'
        _hover={{ color: "white" }}
        _focus={{ color: "white" }}
      >
        send message
      </Button>
    </FormControl>
  )
}
