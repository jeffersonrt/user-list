import React from 'react'
import PropTypes from 'prop-types'
import * as S from './SearchBarStyles'

function SearchBar ({ value, onChange, placeholder }) {
  return (
    <S.Container>
      <S.SearchInput placeholder={placeholder} value={value} onChange={onChange} />
    </S.Container>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchBar
