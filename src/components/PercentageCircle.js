import { Center, Stack } from "@chakra-ui/react"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress"

export default function PercentageCircle({ title, percentage }) {
  return (
    <Stack alignItems='center'>
      <CircularProgress
        capIsRound='true'
        value={percentage}
        size='160px'
        color='white'
        thickness={"4px"}
        trackColor='#D3AD98'
        aria-labelledby='progress bar'
        aria-label='progress bar'
      >
        <CircularProgressLabel fontSize='body' fontWeight='700'>
          {percentage}%
        </CircularProgressLabel>
      </CircularProgress>
      <Center paddingBlockStart='38px' fontSize='body' fontWeight='700'>
        {title}
      </Center>
    </Stack>
  )
}
