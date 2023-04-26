import './index.css'

const HistoryItems = props => {
  const {eachObject, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachObject

  const toDelete = () => {
    onDelete(id)
  }

  const buttonEl = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
      alt="delete"
    />
  )

  return (
    <li className="list-container">
      <div className="list-sub-container">
        <p className="time-style">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logos" />
        <p className="title-style">{title}</p>
        <p className="domain-style">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button
          type="button"
          id="delete"
          className="delete-logo"
          onClick={toDelete}
        >
          {buttonEl}
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
