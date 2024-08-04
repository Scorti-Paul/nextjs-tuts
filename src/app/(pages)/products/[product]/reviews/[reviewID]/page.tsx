const Review = ({ params }: { params: { review: string } }) => {
  return (
    <div>Single Review {params.review} </div>
  )
}
export default Review