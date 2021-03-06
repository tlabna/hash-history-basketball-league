import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import slug from 'slug'
import Loading from './Loading'

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

CustomLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
}

function CustomLink({ to, children }) {
  return (
    <Route
      path={to.pathname}
      // eslint-disable-next-line react/no-children-prop
      children={({ match }) => (
        <li
          style={{
            listStyleType: 'none',
            fontWeight: match ? 'bold' : 'normal',
          }}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  )
}

export default function Sidebar({ title, list, loading, location, match }) {
  return loading === true ? (
    <Loading />
  ) : (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink
            key={item}
            to={{
              // slug makes Item snake case and add '-' instead of spaces
              pathname: `${match.url}/${slug(item)}`,
              search: location.search,
            }}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  )
}
