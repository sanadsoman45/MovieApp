import { useEffect, useState } from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

import { getData } from '../Services/API';
import Loader from './loader';

const TrendingPeople = ()=>{

    const [loading, setLoading] = useState(true);
    const [people, setpeople] = useState([]);

    useEffect(()=>{
        const data = getData('trending/person/week').then((response)=>{
            return response.results;
        }).catch((error)=>console.log("Errors are:"+error));

    })

    return (<View>
        {
            loading?<Loader/>:<View>

            </View>
        }
    </View>)
}

export default TrendingPeople;