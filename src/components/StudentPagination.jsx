function StudentPagination(props) {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={props.page === 1 ? 'page-item disabled' : 'page-item'}>
          <button className="page-link" onClick={() => props.onPageChange(props.page - 1)}>
            Previous
          </button>
        </li>

        
        <li className={props.page === 1 ? 'page-item active' : 'page-item'}>
          <button className="page-link" onClick={() => props.onPageChange(1)}>
            1
          </button>
        </li>

        
        <li className={props.page === 2 ? 'page-item active' : 'page-item'}>
          <button className="page-link" onClick={() => props.onPageChange(2)}>
            2
          </button>
        </li>

       
        <li className={props.page === 2 ? 'page-item disabled' : 'page-item'}>
          <button className="page-link" onClick={() => props.onPageChange(props.page + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default StudentPagination;
