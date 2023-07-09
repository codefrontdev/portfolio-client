import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/Home';
import About from './page/about/About';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import ContactPage from './page/contact-page/ContactPage';
import WorkPage from './page/work-page/WorkPage';
import NotFound from './page/not-found/NotFound';
import LoginAdmin from './page/loginAdmin/LoginAdmin';
import DashboardAdmin from './page/dashboard-admin/DashboardAdmin';
import ProjectTable from './page/dashboard-admin/ProjectTable';
import CategoryTable from './page/dashboard-admin/Category-table';
import UpdateProject from './components/update-project/UpdateProject';
import { useSelector } from 'react-redux';
import PopUp from './page/contact-page/PopUp';
import AddProjectForm from './page/dashboard-admin/AddProgectForm';
import AddCategoryForm from './page/dashboard-admin/AddCategoryForm';
import ProjectDetails from './page/project-details/ProjectDetails';



function App() {
  

  const token = useSelector(state => state.auth.userAdmin)


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/works' element={<WorkPage />} />
      <Route path='/works/details/:id' element={<ProjectDetails />} />
      <Route path='/works/details/:id/update' element={<UpdateProject />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/contact/pop-up' element={<PopUp />} />
      {
        !token?.message ? (
          <Route path='/login-admin' element={<LoginAdmin />} />
          ) : (
            <>
            <Route path='/dashboard-admin' exact element={<DashboardAdmin />} />
            <Route path='/dashboard-admin/all-projects' element={<ProjectTable />} />
            <Route path='/dashboard-admin/all-categories' element={<CategoryTable />} />
            <Route path='/dashboard-admin/add-project' element={<AddProjectForm />} />
            <Route path='/dashboard-admin/add-category' element={<AddCategoryForm />} />
        </>
        )
      }
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
