const RightPanel = ({IMG_CREDIT, locale}) => {
  return (
    <div className='right'>
      <div className='image'>
        <img src='/img/thumbs/3-4.jpg' alt='' />
        <div
          className='main'
          title={IMG_CREDIT["ming-shan-vertical"][locale]}
        ></div>
        <div className='shape'></div>
      </div>
    </div>
  )
}

export default RightPanel