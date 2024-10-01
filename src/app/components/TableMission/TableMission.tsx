import React, { useState } from 'react';
import './TableMission.css'; // Importe o arquivo CSS

interface TableProps {
  data: {
    title: string;
    class: string;
    duration: string;
    checklist: string;
    actions: string;
    status: string;
  }[];
}

const PAGE_SIZE = 5; // Defina o número de itens por página

const TableMission: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular o total de páginas
  const totalPages = Math.ceil(data.length / PAGE_SIZE);

  // Calcular os dados a serem exibidos na página atual
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
              <td>{item.checklist}</td>
              <td>{item.actions}</td>
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
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima
        </button>
      </div>
    </div>
  );
};

export default TableMission;