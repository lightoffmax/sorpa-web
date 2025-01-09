'use client'
import { useTable } from 'react-table';


// const Table = ({columns, data}) => {
//     const table = useReactTable({data, columns })
//     return (
//         <table className="table-auto border-collapse w-full">
//             <thead>
//                 {table.getHeaderGroups().map((headerGroup) => (
//                     <tr key={headerGroup.id}>
//                         {headerGroup.headers.map((header) => (
//                             <th key={header.id}>
//                                 {flexRender(header.column.columnDef.header, header.getContext())}
//                             </th>
//                         ))}
//                     </tr>
//                 ))}
//             </thead>
        
//             <tbody>
//                 {table.getRowModel().rows.map((row) => (
//                     <tr key={row.id}>
//                         {table.getVisibleCells().map((cell) => (
//                             <th key={cell.id}>
//                                 {flexRender(cell.columnDef.column.cell, cell.getContext())}

//                             </th>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     )   
//   }

const Table = ({ columns, data }) => {
    // Инициализация таблицы с помощью useTable
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({ 
     columns,
      data,
});
  
    return (
      <table {...getTableProps()} className="table-auto border-collapse w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id} className="border p-2 bg-gray-700 text-black">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} key={cell.id} className="border p-2">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };


export default function MyTable () {
    const data = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
      ];
      
      const columns = [
        {
          Header: 'ID',
          accessor: 'id',  // Убедитесь, что колонка имеет accessor (или id), который совпадает с ключом в данных
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'Age',
          accessor: 'age',
        },
      ];


      return (<Table data={data} columns={columns}/>);
    }