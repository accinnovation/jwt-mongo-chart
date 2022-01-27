import React, { useEffect, useRef , useState} from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom" ;
import jwt from "jsonwebtoken";

const JWTChart = (jwtData) => {
    console.log('command is inside newly linked node-module new resouce folder data version 5.0');
    if(jwtData.jwtData.jwtSdk && jwtData.jwtData.chartData.chartUrl && jwtData.jwtData.chartData.token){
        console.log(jwtData)
        const sdk = new ChartsEmbedSDK({
            baseUrl: jwtData.jwtData.chartData.chartUrl,
            getUserToken : function(){
                const token = jwt.sign({}, jwtData.jwtData.chartData.token,{
                    expiresIn: '12h'
                });
                return token;
            }
        });
        var chartDiv = useRef(null);
        var [rendered , setRendered] = useState(false);
        var [chart] = useState(sdk.createChart({ chartId : jwtData.jwtData.chartData.chartId, height:'600px', width:'800px' }));
    }

    useEffect(() =>{
        if (jwtData.jwtData.jwtSdk){
            chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log('Error during Charts rendering.', err));
        }
    }, []);
    
    return <div className="chart" ref={chartDiv} />
};

export default JWTChart;
