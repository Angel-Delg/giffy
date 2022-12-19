import PropTypes from 'prop-types'

export const GiffyGridItem = ({title, urlGiffy }) => {
  return (
    <section className="card">
      <img src={urlGiffy} alt={title} />
      <p data-testId="test-title">{ title }</p>
    </section>
  )
}

GiffyGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlGiffy: PropTypes.string.isRequired
}