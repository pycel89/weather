import { createSlice} from "@reduxjs/toolkit";

const citySlice= createSlice({
    name:'city',
    initialState:{
        citys:[],
        mainCity:[]
    },
    reducers:{
        addCity(state,action){

            state.citys.push({
                id: new Date().toISOString(),
                text:action.payload,
            })
        },
        removeCity(state,action){
            state.citys=state.citys.filter(city => city.id !== action.payload.id);
            state.mainCity=state.mainCity.filter(city => city.id !== action.payload.id);

        },
        addMainCity(state,action){

            state.mainCity=[{
                id: new Date().toISOString(),
                text: action.payload.city}];

        }
    }
})
export const{addCity,removeCity,addMainCity} = citySlice.actions;
export default citySlice.reducer