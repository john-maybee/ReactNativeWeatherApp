import {
    View,
    Text,
} from 'react-native';

export default function ForecastDetails({ route }) {
    return(
        <View>
            <Text>{JSON.stringify(route.params)}</Text>
            <Text>{route.params.name} {route.params.temperature}</Text>
        </View>
    )
}

// import React, { useState, useEffect } from 'react';
// import {useNavigation} from '@react-navigation/native';

// export default function ForecastDetails() {
//     // Similar to useHistory
//     const navigation = useNavigation();
//     const [forecastDetails, setForecastDetails] = useState([]);

//     // useEffect(() => {
//     //     fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=9f4b0b3b3b0b3b0b3b0b3b0b3b0b3b0b')    
//     //         .then(response => response.json())
//     //         .then(data => {
//     //             console.log(data);
//     //             setForecastDetails(data);
//     //         })
//     //         .catch(error => {
//     //             console.log(error);
//     //         })
//     // }, []);

//     return (
//         <View>
//             <Text>Forecast Details</Text>
//             <FlatList 
//                 data={forecastDetails}
//                 renderItem={({item}) => (
//                         <Text>{item.name} {item.temperature}</Text>
//                 )}
//                 style={{width: '100%'}}
//             />
//         </View>
//     )
// }