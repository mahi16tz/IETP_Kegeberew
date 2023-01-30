import "../../style/Transaction_log.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./adminnav";

export const TransactionLog = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/transaction-log")
      .then((response) => JSON.stringify(response.data))
      .then((response) => setLogs(response));
  }, [logs, setLogs]);

  const history = useNavigate();

  return (
    <div>
      <AdminNavbar />
      <div class="container-t">
        <button className="back-t" onClick={() => history(-1)}>
          <BsFillArrowLeftCircleFill size="20px" /> Back
        </button>
        <div class="header_fixed-t">
          <div class="title">Transction Log</div>
          <table>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Farmer Name</th>
                <th>Amount</th>
                <th>Price(ETB)</th>
                <th>Trasaction Date</th>
              </tr>
            </thead>
            {logs.map((log, key) => (
              <tbody>
                <tr>
                  <td key={key}>{log.customer}</td>
                  <td key={key}>{log.farmer}</td>
                  <td key={key}>{log.amount}</td>
                  <td key={key}>{log.price}</td>
                  <td key={key}>{log.transactionDate}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionLog;
