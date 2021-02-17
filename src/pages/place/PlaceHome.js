import axios from 'axios';
import {useState, useEffect} from 'react';
import MaterialCard from '../../components/card/materialCard';
import MaterialInput from '../../components/materialInput/materialInput';
import MaterialSelect from '../../components/materialSelect/MaterialSelect';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import MaterialImages from '../../components/materialImages/materialImages';
import * as FIXEDDATA from '../../utils/fixedData'
import MaterialButton from '../../components/materialButton/materialButton';
export default function PlaceHome() {
  const [places, setplaces] = useState([]);
  const selected = {
            title: "",
            category: {title: ""},
            description: "",
            images: [],
            minBudget: 0,
            city:"",
            type: "",
            workStart:"",
            workEnd:"",
            phone:""

          }
  const [currentSelection, setCurrentSelection] = useState(selected)
  const [state, setState] = useState("add")
  useEffect(() => {
    axios.get('http://127.0.0.1:3000/place/list').then((response) => {
      // console.log(response);
      // console.log(response.data.data[0]);
      setplaces(response.data.data);
    });
  }, []);
  
  const deletePlace = (index, id) => (e) => {
    if(window.confirm('Are you sure you want this action'))
    axios
    .delete(`http://localhost:3000/place/delete/${id}`)
    .then((res) => {
      setplaces(places.filter((item, j) => index !== j));
      // console.log(res);
      // console.log('deleteeeeeeeeeed');
    })
    .catch((err) => {
      // console.log(err);
    });
  };
  
  const addPlace=(e)=>{
    e.preventDefault()
    currentSelection.category = currentSelection.category.title;
    
    axios
    .post(`http://localhost:3000/place/create`,currentSelection).then(response=>{
      setCurrentSelection(selected)
      setState("add")
    })
  
  }
  const editPlace=(e)=>{
    e.preventDefault()
    
    
    axios
    .put(`http://localhost:3000/place/update/${currentSelection._id}`,currentSelection).then(response=> {
      console.log(response.data);
      setCurrentSelection(selected)
      setState("add")
    })
  }
  
  const editPlaceHandler=place=>(e)=>{
      setCurrentSelection(place);
      setState("edit")
     
  }
  const manageAd = (index,id)=>(e)=>{
    if(window.confirm('Are you sure you want this action'))
    axios.put(`http://127.0.0.1:3000/place/manage-ad/${id}`).then(response=>{

      setplaces(places.filter((place,j)=> {
        if(index == j){
          place.isAdvertise = !place.isAdvertise
        }
      return true
      })
        )
        
    });
  }
  return (
      <div className={'row mt-5'}>
        <div className={'col-6 mr-auto magic'}>
        
          <SectionHeader text="Place data" position="center"/>
            {/* <h2>placeData</h2> */}
            <MaterialButton
           text={"Add Place"}
           type={"button"}
          //  onClickHandler=
         />
         <br/>
          {places.map((place, index) => (
              <MaterialCard
                  key={index}
                  img={place.images[0]}
                  title={place.title}
                  note={place.city}
                  highlight={place._id&&place._id==currentSelection._id}
                  actions={[
                    {handler: deletePlace(index, place._id), type: 'remove'},
                    {handler: editPlaceHandler(place), type: 'edit'},
                    {handler: manageAd(index,place._id), type:(place.isAdvertise)?"removeAd":"addAsAd"},
                  ]}
              />
          ))}
        

        </div>
        <div className={'col-6 magic'}>
          <SectionHeader text="Edit Place " position="center"/>
          <form>
            <MaterialInput
                label="Title"
                placeholder="place title"
                name="title"
                isRequired={true}
                value={currentSelection.title}
                onChangeHandler={e=>{
                  setCurrentSelection({...currentSelection,title:e.target.value})
                  if(currentSelection._id){
                     places.find(place=>place._id==currentSelection._id).title=currentSelection.title 
                  }
                 }
                }
            />   
            <MaterialInput
                label="Description"
                placeholder="place title"
                name="description"
                isRequired={true}
                value={currentSelection.description}
                onChangeHandler={e=>setCurrentSelection({...currentSelection,description:e.target.value})}
            />
            <MaterialImages
                label="Images"
                images={currentSelection.images.map(image=>({src:image}))}
                handler={e=>console.log("it worked")}
            />
            <div className="row">
              <div className="col-6">
                <MaterialSelect
                    options={FIXEDDATA.CITIES}
                    name="city"
                    label="City"
                    isRequired={true}
                    noSelectionText="Choose place city"
                    value={currentSelection.city}
                    onChangeHandler={text=>setCurrentSelection({...currentSelection,city:text})}
                />
              </div>
              <div className="col-6">
                <MaterialSelect
                    options={FIXEDDATA.TYPES}
                    name="type"
                    label="Type"
                    isRequired={false}
                    noSelectionText="Choose trip type"
                    value={currentSelection.type}
                    onChangeHandler={text=>setCurrentSelection({...currentSelection,type:text})}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <MaterialSelect
                    options={FIXEDDATA.CATEGORY}
                    name="category"
                    label="Category"
                    isRequired={false}
                    noSelectionText="Choose place category"
                    value={currentSelection.category.title}
                    onChangeHandler={text=>setCurrentSelection({...currentSelection,category:{...currentSelection.category,title:text}})}
                />
              </div>
              <div className="col-6">
              
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <MaterialSelect
                    options={FIXEDDATA.DAYHOURS}
                    name="workStart"
                    label="Opens at "
                    isRequired={false}
                    noSelectionText="Choose work start time"
                    value={currentSelection.workStart}
                    onChangeHandler={text=>setCurrentSelection({...currentSelection,workStart:parseInt(text)})}
                />
              </div>
              <div className="col-6">
                <MaterialSelect
                    options={FIXEDDATA.DAYHOURS}
                    name="workEnd"
                    label="Closes at "
                    isRequired={false}
                    noSelectionText="Choose work end time"
                    value={currentSelection.workEnd}
                    onChangeHandler={text=>setCurrentSelection({...currentSelection,workEnd:parseInt(text)})}
                />
              </div>
            </div>
            <MaterialInput
                label="Minimum budget"
                placeholder="minimum budget in EGP"
                name="minBudget"
                isRequired={false}
                value={currentSelection.minBudget}
                onChangeHandler={e=>setCurrentSelection({...currentSelection,minBudget:parseInt(e.target.value)})}
            />
            <MaterialInput
                label="Phone number"
                placeholder="must include area code"
                name="phone"
                isRequired={false}
                value={currentSelection.phone}
                onChangeHandler={e=>setCurrentSelection({...currentSelection,phone:e.target.value})}
            />
            <MaterialButton
              text={state=="add"?"Add Place!":"Submit Changes!"}
              type={"submit"}
              onClickHandler={state=="add"?addPlace:editPlace}
            />
          </form>
        </div>
      </div>
  );
}
