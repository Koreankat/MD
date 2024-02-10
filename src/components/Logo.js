import { Image } from "@chakra-ui/image"
import { Box } from "@chakra-ui/react"

import logoWithWhiteLetters from "../resources/images/logo.svg"
import logoWithBlackLetters from "../resources/images/logo.svg"

export default function Logo({ width, height, variant = "black", ...rest }) {
  return (
    <Box as='figure' objectFit='cover' {...rest}>
      <a href='#home'>
        {variant === "white" ? (
          <Image src={logoWithBlackLetters} width={width} height={height} />
        ) : (
          <Image src={logoWithWhiteLetters} width={width} height={height} />
        )}
      </a>
    </Box>
  )
}
