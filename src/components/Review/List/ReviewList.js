import { Rating } from "../../../../Rating/Rating"
import { ReviewItem } from "../../Articles/ArticleView/ReviewItem"
import { ContainerItem, RatingContainer } from "./styles"

export function ReviewList(props) {
  const loaded = props.loaded
  const attr = props.reviews

  console.log('List', reviewsListItem)
  console.log('loaded', loaded)
  
  let reviewsListItem

  if (loaded && attr) {
    reviewsListItem = attr.map((i) => {
      console.log('review', reviewsListItem)
      return (
        <ReviewItem key={i.id} attributes={i.attributes} />)
    });
  }

  return (
    <>
      <ContainerItem>
        <h4>Titulo: </h4>
        <div>
          <p>
            <b>Descrição: </b>
          </p>
        </div>
        <RatingContainer>
          <Rating />
        </RatingContainer>
      </ContainerItem>

      {/* {
        reviews.map((i) => {
          <ReviewItem key={i.id} attributes={i.attributes} />
          console.log('attr', i)
        })
      } */}
    </>
  )
}