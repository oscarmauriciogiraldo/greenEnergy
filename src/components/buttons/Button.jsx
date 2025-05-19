const Button = ({  className}) => {
  return (
    <button className={`${className ?? ''} cta-wrapper`}>
        <div className="cta-butto group">
            <div className="bg-circle">
                <p className="text">
                   Ver análisis actualizado
                </p>
                {/* <div className="arrow-wrapper">
                    <img src="/public/images/arrow-down.svg" alt="arrow" />
                </div> */}
            </div>
        </div>
    </button>
  )
}

export default Button