// src/CSVTable.js
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function CSVTable() {
    const [data, setData] = useState([]);
    const csvFilePath = process.env.PUBLIC_URL + '/TSLA.csv';

    useEffect(() => {
        Papa.parse(csvFilePath, {
            download: true,
            header: true,
            complete: (result) => {
                setData(result.data);
            }
        });
    }, []);

    return (
        <table className="data-table">
            <thead>
                <tr>
                    {/* Replace with your CSV headers, or dynamically generate headers */}
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.Date}</td>
                        <td>{row.Open}</td>
                        <td>{row.High}</td>
                        <td>{row.Low}</td>
                        <td>{row.Close}</td>
                        <td>{row.Volume}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CSVTable;
