import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../manufacturer_afterlogin.css";
import "./navbarcss/navcss.css";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
const LOGIN_URL = "/auth";


const rows = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];

const Manufacturer_afterlogin = ({ state }) => {
  const [pop, setPop] = useState(false);
  const [value, setValue] = useState("");

  let navigate = useNavigate();
  const addDest = () => {
    let path = "../mfg_add_dest";
    navigate(path, { replace: true });
  };
  const dest = () => {
    let path = "../manufacturer_afterlogin";
    navigate(path, { replace: true });
  };
  const dest1 = () => {
    let path = "../mhome_page";
    navigate(path, { replace: true });
  };
  const dest2 = () => {
    let path = "../manufactor_search";
    navigate(path, { replace: true });
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "logs",
      headerName: "Application logs",
      flex: 4,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    
    <div>
    <nav>
        <div className="navibar"
        style={{backgroundColor: '#003056', color: "white", height: "50px"}}
        >
            <a onClick={addDest}>HomePage</a>
            <a>Logs</a>
            <a>Pending requests</a>
            <a>New user</a>
            <a>Upcoming events</a>
        </div>
    </nav>
    
    <div>
          <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
</div>
    
    
  )
};



  
export default Manufacturer_afterlogin;





// import { useRef, useState, useEffect, useContext } from "react";
// // import { ethers } from "ethers";
// // import AuthContext from "../context/AuthProvider";
// // import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import { Container } from '@mui/material';
// //import Generator from "./generator";
// import "../manufacturer_afterlogin.css";
// import "./navbarcss/navcss.css";
// import Navlogo from "../nav-logo.png"
// import { Box, Typography, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../theme";
// //import { mockDataTeam } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
// import Header from "../components/Header";
// import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// const LOGIN_URL = "/auth";


// const rows = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
// ];

// const Manufacturer_afterlogin = ({ state }) => {
//   const [pop, setPop] = useState(false);
//   const [value, setValue] = useState("");

//   let navigate = useNavigate();
//   const addDest = () => {
//     let path = "../mfg_add_dest";
//     navigate(path, { replace: true });
//   };
//   const dest = () => {
//     let path = "../manufacturer_afterlogin";
//     navigate(path, { replace: true });
//   };
//   const dest1 = () => {
//     let path = "../mhome_page";
//     navigate(path, { replace: true });
//   };
//   const dest2 = () => {
//     let path = "../manufactor_search";
//     navigate(path, { replace: true });
//   };
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "logs",
//       headerName: "Application logs",
//       flex: 4,
//     },
//     {
//       field: "accessLevel",
//       headerName: "Access Level",
//       flex: 1,
//       renderCell: ({ row: { access } }) => {
//         return (
//           <Box
//             width="60%"
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             backgroundColor={
//               access === "admin"
//                 ? colors.greenAccent[600]
//                 : access === "manager"
//                 ? colors.greenAccent[700]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//           >
//             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
//             {access === "manager" && <SecurityOutlinedIcon />}
//             {access === "user" && <LockOpenOutlinedIcon />}
//             <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
//               {access}
//             </Typography>
//           </Box>
//         );
//       },
//     },
//   ];
//   return (
    
//     <div>
//     <nav>
//         <div className="navibar"
//         style={{backgroundColor: '#003056', color: "white", height: "50px"}}
//         >
//             <a onClick={addDest}>HomePage</a>
//             <a>Logs</a>
//             <a>Pending requests</a>
//             <a>New user</a>
//             <a>Upcoming events</a>
//         </div>
//     </nav>
    
//     <div>
//           <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
// </div>
    
    
//   )
// };



  
// export default Manufacturer_afterlogin;
