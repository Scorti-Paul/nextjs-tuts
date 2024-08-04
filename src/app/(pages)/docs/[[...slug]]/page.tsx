const IDocs = ({ params }: { params: { slug: string[] } }) => {
  console.log(params.slug)
  return (
    <div>
      {
        params.slug?.length === 2 ? (
          <>
            <div>Showing Concept view {params.slug[2]}</div>
          </>
        ) : params.slug?.length === 1 ? (
          <>
            <div>
              Showing Features view {params.slug[2]}
            </div>
          </>
        ) : (
          <>
            <div>
              main docs pages
            </div>
          </>
        )
      }
    </div>
  )
}

export default IDocs