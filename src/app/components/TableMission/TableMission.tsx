import React, { useState } from 'react';
import './TableMission.css';
import Image from 'next/image';
import EditIconTable from '../../../../public/icones/edit_icon_table.svg';
import DeleteIconTable from '../../../../public/icones/delete_icon_table.svg';
import ChecklistIconTable from '../../../../public/icones/checklist_icon_table.svg';

interface TableProps {
  data: {
    title: string;
    class: string;
    duration: string;
    checklist: string;
    status: string;
  }[];
}

const PAGE_SIZE = 5; // Número de itens por página
const PAGE_LIMIT = 3; // Número máximo de páginas mostradas

const TableMission: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentData = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calcular quais números de páginas mostrar
  const pageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(PAGE_LIMIT / 2));
    const endPage = Math.min(totalPages, startPage + PAGE_LIMIT - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div>
      <table className="datatable__mission">
        <thead>
          <tr>
            <th>Título</th>
            <th>Turma</th>
            <th>Duração</th>
            <th>Checklist</th>
            <th>Ações</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.class}</td>
              <td>{item.duration}</td>
              <td>
                <div className='action_icons'>
                  <div className='icon_container_table'>
                    <Image
                      src={ChecklistIconTable}
                      alt='checklist icon table'
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className='action_icons'>
                  <div className='icon_container_table'>
                    <Image
                      src={EditIconTable}
                      alt='edit icon table'
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className='icon_container_table'>
                    <Image
                      src={DeleteIconTable}
                      alt='delete icon table'
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Navegação de páginas */}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>

        {/* Números das páginas */}
        <div className="page-numbers">
          {pageNumbers().map((pageNumber) => (
            <div
              key={pageNumber}
              className={`page-button ${currentPage === pageNumber ? 'active' : ''}`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </div>
          ))}
        </div>

        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </div>
  );
};

export default TableMission;