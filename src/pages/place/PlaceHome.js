import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MaterialCard from "../../components/card/materialCard";
import MaterialInput from "../../components/materialInput/materialInput";
import MaterialSelect from "../../components/materialSelect/MaterialSelect";
import SectionHeader from "../../components/sectionHeader/sectionHeader";

export default function PlaceHome() {
  const [places, setplaces] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/place/list").then((response) => {
      console.log(response);
      setplaces(response.data.data);
    });
  }, []);

  const deletePlace = (index, id) => (e) => {
    alert("are you sure you want delete this place");
    axios
      .delete(`http://localhost:3000/place/delete/${id}`)
      .then((res) => {
        setplaces(places.filter((item, j) => index !== j));
        console.log(res);
        console.log("deleteeeeeeeeeed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={"row mt-5"}>
      <div className={"col-6 mr-auto magic"}>
        {/* <h2>placeData</h2> */}
        <SectionHeader text="Place data" position="center" />
        {places.map((place, index) => (
          <MaterialCard
            img={place.images[0]}
            title={place.title}
            note={place.city}
            actions={[
              { handler: deletePlace(index, place._id), type: "remove" },
              { handler: undefined, type: "edit" },
            ]}
          />
        ))}
        {/* {places.map(place=> <>
              <div className={"list-group"}>
              <a  className="list-group-item list-group-item-action m-1">
                <Link to={`/places/${place._id}`}>
                        <span className={"text-info font-weight-bold"}> {place.title} </span>
                </Link>
              </a>
              </div>
             </>)} */}
      </div>
      <div className={"col-6 magic"}>
        <SectionHeader text="Edit Place " position="center" />
        <form>
          <MaterialInput
            label="Title"
            placeholder="place title"
            name="title"
            isRequired={true}
            value=""
          />
          <div className="row">
            <div className="col-6">
          <MaterialSelect
            options={["Cairo", "Alex", "Aswan"]}
            name="city"
            label="City"
            isRequired={true}
            noSelectionText="Choose place city"
            value=""
          />
            </div>
            <div className="col-6">
          <MaterialSelect
            options={["solo", "friends", "family", "couples"]}
            name="type"
            label="Type"
            isRequired={false}
            noSelectionText="Choose trip type"
            value=""
          />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
          <MaterialSelect
            options={["Cafe", "Garden", "Cinma"]}
            name="category"
            label="Category"
            isRequired={false}
            noSelectionText="Choose place category"
            value=""
          />
            </div>
            <div className="col-6">
              
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <MaterialSelect
                options={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                ]}
                name="workStart"
                label="Opens at "
                isRequired={false}
                noSelectionText="Choose work start time"
                value=""
              />
            </div>
            <div className="col-6">
              <MaterialSelect
                options={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",
                  "24",
                ]}
                name="workEnd"
                label="Closes at "
                isRequired={false}
                noSelectionText="Choose work end time"
                value=""
              />
            </div>
          </div>
          <MaterialInput
            label="Minimum budget"
            placeholder="minimum budget in EGP"
            name="minBudget"
            isRequired={false}
            value=""
          />
          <MaterialInput
            label="Phone number"
            placeholder="must include area code"
            name="phone"
            isRequired={false}
            value=""
          />
        </form>
      </div>
    </div>
  );
}
