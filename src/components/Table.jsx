import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'FirstName', headerName: 'الاسم الاول', width: 150 },
    { field: 'LastName', headerName: 'اسم العائلة', width: 150 },
    {
        field: 'Email',
        headerName: 'البريد الاكتروني',
        type: 'number',
        width: 150,
    },
    {
        field: 'Phone',
        headerName: 'رقم الهاتف',
        type: 'number',
        width: 150,
    }
];

    
const paginationModel = { page: 0, pageSize: 5 };

export default function EmpTable({rows}) {
    return (
        <Paper sx={{ height: 400, width: '75vh', mr: 'auto', ml: 'auto', mt: '3vh', direction:'ltr' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                
                sx={{ border: 0, textAlign: 'center' }}
            />
        </Paper>
    );
}
