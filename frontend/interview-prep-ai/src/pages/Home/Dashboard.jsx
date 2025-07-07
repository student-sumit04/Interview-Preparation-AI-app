import React, { useEffect , useState } from 'react'
import { LuPlus } from 'react-icons/lu';
import { CARD_BG } from "../../utils/data";
import toast from 'react-hot-toast';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import SummaryCard from '../../components/Cards/SummaryCard';
import moment from 'moment';
import Modal from '../../components/Modal';
import CreateSessionForm from './CreateSessionForm';
import DeleteAlertContent from '../../components/DeleteAlertContent';
const Dashboard = () => {
  const navigate = useNavigate();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    open: false,
    data: null,
  });

  const fetchAllSessions = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.SESSION.GET_ALL);
      setSessions(response.data);
    } catch (error) {
      console.error("Error fetching session data:", error);
    }
  };

  const deleteSession = async (sessionData) => {
    try {
      await axiosInstance.delete(API_PATHS.SESSION.DELETE(sessionData?._id));

      toast.success("Session Deleted Successfully");
      setOpenDeleteAlert({
        open: false,
        data: null,
      });
      fetchAllSessions();
    }catch (error){
      console.error("Error deleting session data:" ,error );
    }
  };

  useEffect(() => {
    fetchAllSessions();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 min-h-screen">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7'>
          {sessions
            .slice()
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)) // newest first
            .map((data, index) => (
              <SummaryCard
                key={data?._id}
                colors={CARD_BG[index % CARD_BG.length]}
                role={data?.role || ""}
                topicsToFocus={data?.topicsToFocus || "_"}
                experience={data?.experience || "_"}
                questions={data?.questions?.length || "_"}
                description={data?.description || ""}
                lastUpdated={
                  data?.updatedAt
                    ? moment(data.updatedAt).format("DD MM YYYY")
                    : ""
                }
                onSelect={() => navigate(`/interview-prep/${data?._id}`)}
                onDelete={() => setOpenDeleteAlert({ open: true, data })}
              />
            ))}
        </div>

        <button className='h-12 md:h-12 flex items-center justify-center gap-3 bg-linear-to-r from-[#e99a4b] text-sm font-semibold text-off-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white transition-colors cursor-pointer hover:shadow-2xl hover:shadow-orange-300 fixed bottom-10 md:bottom-20 right-10 md:right-2' 
          onClick={() => setOpenCreateModal(true)}>
          <LuPlus className='text-2xl text-white' />
          Add New
        </button>
      </div>

      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <div>
          <CreateSessionForm />
        </div>
      </Modal>

      <Modal 
        isOpen={openDeleteAlert?.open}
        onClose={()=> {
          setOpenDeleteAlert({open:false, data:null});
        }}
        title="Delete Alert"
        >
          <div className='w-[30vw]'>
            <DeleteAlertContent
               content = "Re you sure you want to delete this session detail?"
               onDelete={()=> deleteSession(openDeleteAlert.data)}
              />
          </div>
        </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
