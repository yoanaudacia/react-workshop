import React from "react";
import { Person } from "../../models";

interface Props {
  persons: Person[];
}

interface State {
  filtredPersons: Person[];
  filters: string[];
}

class ExerciceClass extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { filtredPersons: props.persons, filters: ["male", "female"] }
  }

  handleFilterChange(filter: "male" | "female", value: boolean) {
    if(value) {
      this.setState((prevState) => {
        return {
          ...prevState,
          filters: [...prevState.filters, filter]
        }
      }, () => this.filterGender())
    } else {
      this.setState((prevState) => {
        return {
          ...prevState,
          filters: prevState.filters.filter(f => f !== filter)
        }
      }, () => this.filterGender());
    }
  }

  filterGender() {
    this.setState((prevState) => {
      const filtredPersons = this.props.persons.filter(p => prevState.filters.includes(p.gender));
      return {
        ...prevState,
        filtredPersons
      }
    });
  };

  render() {
    return (
      <>
        <div style={{display: "inline-flex"}}>
          <div>
            <input 
              type="checkbox" 
              name="male" 
              value="male" 
              checked={this.state.filters.includes("male")}
              onChange={e => this.handleFilterChange("male", e.target.checked)}
            />
            <label>Male</label>
          </div>
          <div>
            <input 
              type="checkbox" 
              name="female" 
              value="female" 
              checked={this.state.filters.includes("female")}
              onChange={e => this.handleFilterChange("female", e.target.checked)}
            />
            <label>Female</label>
          </div>
        </div>
        <br />
        <ul>
          {this.state.filtredPersons.map(person => (
            <li key={person.name}>{person.name}</li>
          ))}
      </ul>
      </>
    )
  }
}

export default ExerciceClass;
