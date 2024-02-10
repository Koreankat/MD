import { Flex } from "@chakra-ui/react"
import bgImageSection7 from "../resources/images/bgImageIce7.jpg"
import RatingCard from "./RatingCard"
import lessieur from "../resources/images/lesieur.png"
import magiclear from "../resources/images/magiclear.png"
import woman from "../resources/images/woman.png"

const ratingCard = [
  {
    description:
      "Au nom de toute l'équipe, je tiens à vous remercier pour ce gâteau professionnel et délicieux que tu as préparé pour nous. C'était vraiment apprécié ...",
    created_at: "07-Février-2024",
    img: lessieur,
  },
  {
    description:
      "Merci beaucoup ma chérie, 7emerti lia wejhi durant notre collabe avec magiclear, c'était magnifique 😘",
    img: magiclear,
    created_at: "03-Décembre-2023",
  },
  {
    description:
      "Merci beaucoup, c'était exactement ce que je voulais et meme mieux ❤️",
    created_at: "14-Janvier-2024",
    img: woman,
  },
]

export default function Section7() {
  return (
    <Flex
      position='relative'
      backgroundImage={`url(${bgImageSection7})`}
      color='white'
      width='full'
      as='section'
      backgroundAttachment='fixed'
      backgroundPosition={["top", "top", "top", "center", "center"]}
      backgroundSize='cover'
      id='reviews'
      alignItems='center'
      paddingBlock='120px'
      paddingInline={["0", "0", "0", "116px", "116px"]}
      justifyContent={["space-around", "space-between"]}
      direction={["column", "row"]}
      className='smt'
    >
      {ratingCard.map((card, key) => (
        <RatingCard key={key} data={card} img={card.img} />
      ))}
    </Flex>
  )
}
