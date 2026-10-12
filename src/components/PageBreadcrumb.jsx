function PageBreadcrumb() {
  return (
    <nav>
      <ol className="breadcrumb breadcrumb-dark bg-dark rounded px-3 py-2 mb-3">
        <li className="breadcrumb-item">
          <a href="#" className="text-white text-decoration-none">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" className="text-white text-decoration-none">Students</a>
        </li>
        <li className="breadcrumb-item active fw-bold">Directory</li>
      </ol>
    </nav>
  );
}

export default PageBreadcrumb;
