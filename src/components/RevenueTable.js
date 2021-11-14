import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';
import { getRevenueResult } from '../store/waterAllocation';
import { getAllocationList} from '../store/waterDispense';
function RevenueTable(props) {
   const dispatch = useDispatch();
   const waterResult = useSelector(getRevenueResult);
   const waterAlloc = useSelector(getAllocationList);
   return (
      <div>
         {JSON.stringify(waterResult)}
         {JSON.stringify(waterAlloc)}
      </div>
   )
}

RevenueTable.propTypes = {

}

export default RevenueTable

