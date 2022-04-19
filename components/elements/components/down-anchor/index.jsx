const DownAnchor = ({ sectionTarget }) => {
  return (
    <div className='down anchor'>
      <a href={"#" + sectionTarget}>
        <img className='svg' src='/img/svg/down-arrow.svg' alt='' />
      </a>
    </div>
  )
}

export default DownAnchor
