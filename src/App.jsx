import { useState } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import PageBreadcrumb from './components/PageBreadcrumb';
import StudentCard from './components/StudentCard';
import StudentPagination from './components/StudentPagination';
import AlertMessage from './components/AlertMessage';
import Footer from './components/Footer';

function App() {
 
  const [page, setPage] = useState(1);

  // Alert visible or hidden
  const [showAlert, setShowAlert] = useState(true);

  // Called when a card is deleted: show the alert again
  function studentDeleted() {
    setShowAlert(true);
  }

  return (
    <>
      
      <AppNavbar />

      <div className="container">
      
        <PageBreadcrumb />

        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
          <h2>Student Directory</h2>
          <button className="btn btn-navy">Add New Student</button>
        </div>

       
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mb-4">

         
          {page === 1 && (
            <>
              <div className="col">
                <StudentCard
                  id={101}
                  name="Jane Doe"
                  major="Computer Science"
                  year={2}
                  gpa={3.8}
                  email="jane@gmail.com"
                  onDelete={studentDeleted}
                />
              </div>
              <div className="col">
                <StudentCard
                  id={102}
                  name="Mary Doe"
                  major="Computer Science"
                  year={2}
                  gpa={3.8}
                  email="mary@gmail.com"
                  onDelete={studentDeleted}
                />
              </div>
              <div className="col">
                <StudentCard
                  id={103}
                  name="Gant Doe"
                  major="Computer Science"
                  year={2}
                  gpa={3.8}
                  email="gant@gmail.com"
                  onDelete={studentDeleted}
                />
              </div>
              <div className="col">
                <StudentCard
                  id={104}
                  name="Amm Doe"
                  major="Computer Science"
                  year={2}
                  gpa={3.8}
                  email="amm@gmail.com"
                  onDelete={studentDeleted}
                />
              </div>
            </>
          )}

          {/* Page 2 shows this student */}
          {page === 2 && (
            <div className="col">
              <StudentCard
                id={105}
                name="Zahra Yousuf"
                major="Software Engineering"
                year={3}
                gpa={3.6}
                email="zahra@gmail.com"
                onDelete={studentDeleted}
              />
            </div>
          )}
        </div>

      
        <StudentPagination page={page} onPageChange={setPage} />

      
        {showAlert && (
          <AlertMessage
            message="Student records have been successfully updated."
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>

      
      <Footer />
    </>
  );
}

export default App;
