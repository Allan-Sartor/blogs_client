import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { ButtonIcon, ListPagination } from './styles'

export const Pagination = ({ limit, total, offset, setOffSet }) => {
  const MAX_LEFT = (total - 1) / 2
  
  const currentPage = offset
  const totalPages = Math.ceil(total / limit)
  const maxFirst = Math.max(totalPages - 1, 1);
  const firstPage = Math.min(
    Math.max(currentPage - MAX_LEFT, 1),
    maxFirst
  )

  function handlePageChange(page) {
    setOffSet(page--)
  }

  return (
    <ListPagination>
      <li>
        <ButtonIcon 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaArrowLeft size={18} color="#FFF" /> 
        </ButtonIcon>
      </li>
      { Array.from({ length: totalPages })
        .map((_, index) => index + firstPage)
        .map(( page ) => (
          <li key={ page }>
            <button
              className={ page === currentPage ? 'active_button' : ''}
              onClick={() => { setOffSet(page--) }}
            >
              { page }
            </button>
          </li>
        ))
      }
      <li>
        <ButtonIcon
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FaArrowRight size={18} color="#FFF" /> 
        </ButtonIcon>
      </li>
    </ListPagination>
  )
}

