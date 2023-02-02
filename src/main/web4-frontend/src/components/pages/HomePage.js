import React from 'react';
import Footer from "../footer/Footer";
import {PointForm} from "../form/PointForm";
import TableFooter from "../table/TableContol";
import HitsTable from "../table/HitsTable";
import Graph from "../graph/Graph";
import TableControl from "../table/TableContol";


const HomePage = () => {
    return (
        <div>
            <div className="container">

                <div className="mt-3 d-flex justify-content-around flex-md-row flex-column">
                    <Graph width={350} height={350}/>
                    <PointForm/>
                </div>

                <div className="d-flex justify-content-center">
                    <div
                        className="user-select-none border border-1 rounded p-2 m-3 shadow bg-secondary table-weigh">
                        <HitsTable/>
                        <TableControl/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;