import React, { Component } from "react";

import Isotope from "isotope-layout";

//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';

import "../css/IsotopeHandler.css";

class IsotopeHandler extends Component {
  filters = [];
  filterFns = {
    //match
    matches: function (itemElem, filterField, filterValue) {
      var values = itemElem.getAttribute("data-" + filterField);
      return values.match(filterValue);
    },
    //greaterThan
    greaterThan: function (itemElem, filterField, filterValue) {
      var number = itemElem.getAttribute("data-" + filterField);
      return parseInt(number, 10) > filterValue;
    },

    //lessThan
    lessThan: function (itemElem, filterField, filterValue) {
      var number = itemElem.getAttribute("data-" + filterField);
      return parseInt(number, 10) < filterValue;
    },

    //Between
    between: function (itemElem, filterField, filterValue) {
      var number = itemElem.getAttribute("data-" + filterField);
      return (
        parseInt(number, 10) > parseInt(filterValue.split(",")[0], 10) &&
        parseInt(number, 10) < parseInt(filterValue.split(",")[1], 10)
      );
    }
  };

  constructor() {
    super();
    this.myRef = React.createRef();

    this.state = {
      sortBy: "original-order"
    };

    this.onFilterHandler = this.onFilterHandler.bind(this);
    this.onSortHandler = this.onSortHandler.bind(this);
    this.filterData = this.filterData.bind(this);
    this.submitIsotopeFormHandler = this.submitIsotopeFormHandler.bind(this);
  }

  onSortHandler(sortValue) {
    if (sortValue) {
      //console.log("sortValue", sortValue);
      let bool = this.state.bool;
      let options = { sortBy: sortValue };

      options = Object.assign(options, {
        sortAscending: (bool = !bool)
      });

      this.setState({ bool: bool });
      this.setState({ sortBy: sortValue });

      this.state.iso.arrange(options);
    }
  }

  /*
  takes a string in form rule|field|value and returns an object in following form
  {
    condition: string,
      name: string,
      field: string,
      value: string,
      filterFunc: function
  }
  */
  getFilterObject(condition) {
    const conditionItems = condition.split("|");
    const filterName = conditionItems[0];
    const filterField = conditionItems[1];
    const filterValue = conditionItems[2];

    return {
      condition: condition,
      name: filterName,
      field: filterField,
      value: filterValue,
      filterFunc: this.filterFns[filterName]
    };
  }

  /*
  This function will be called each time filter condition is modified and has following inputs:
  1. addFilter: boolean flag to indicate if new filter condition should be added or existing should be removed
  2. filterCondition: a string condition or an array of conditions in form rule|field|value
  3. type: string value that would be wither AND or OR to determine if all conditions in type should be matched or any single should be matched
  
  based on given parameters, function will update exiitng filters array to include new filter or remove existing one
  filter array will have each item in following form:
  {
    type: string, (AND/OR)
    filters: Array[
      {
        condition: string,
        name: string,
        field: string,
        value: string,
        filterFunc: function
      }
    ]
  }
  */
  onFilterHandler(addFilter, filterCondition, type = "AND") {
    // use matching filter function
    // let val = filterFns[filterName] || filterValue;
    const filterObj = {
      type: type,
      filters: Array.isArray(filterCondition)
        ? filterCondition.map((cnd) => this.getFilterObject(cnd))
        : [this.getFilterObject(filterCondition)]
    };
    const existingFilters = this.filters.filter(
      (f) =>
        f.filters.length === filterObj.filters.length &&
        f.filters.every((f) =>
          filterObj.filters.some(
            (fObjFilter) => fObjFilter.condition === f.condition
          )
        )
    );

    if (addFilter && existingFilters.length === 0) {
      this.filters = [...this.filters, filterObj];
    } else if (!addFilter) {
      this.filters = this.filters.filter((f) => !existingFilters.includes(f));
    }

    this.state.iso.arrange();
  }

  /*
  This function will take an item as an input and based on current filters it will return true if item should be filtered; false otherwise.
  */
  filterData(item) {
    if (this.filters.length <= 0) {
      return true;
    }

    const filterPredicate = (filterObj) => {
      return typeof filterObj.filterFunc === "function"
        ? filterObj.filterFunc(item, filterObj.field, filterObj.value)
        : filterObj.value === "*"
        ? true
        : item.classList.contains(filterObj.value);
    };

    for (let idx = 0; idx < this.filters.length; idx++) {
      const filterObj = this.filters[idx];
      const retVal =
        filterObj.type === "OR"
          ? filterObj.filters.some((fObjFilter) => filterPredicate(fObjFilter))
          : filterObj.filters.every((fObjFilter) =>
              filterPredicate(fObjFilter)
            );

      if (retVal) {
        return retVal;
      }
    }
    return false;
  }

  submitIsotopeFormHandler(data) {
    //console.log("data now with parent", data);

    if (data.filtering) {
      //console.log("data.filtering.split()[1]", data.filtering.split("|")[1])
      //rule/field/value
      this.onFilterHandler(
        data.filtering.split("|")[0],
        data.filtering.split("|")[1],
        data.filtering.split("|")[2].replace("&", "|")
      );
    }

    //sorting
    if (data.sorting) {
      this.onSortHandler(data.sorting);
    }
  }

  componentDidMount() {
    //console.log("this.props.items", this.props.items);

    //if(this.props.items.length > 0 && this.props.isotopeForm){
    this.setState({
      items: this.props.items,
      isotopeForm: this.props.isotopeForm
    });
    //}

    setTimeout(() => {
      // init Isotope
      var iso = new Isotope(this.myRef.current, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        getSortData: this.getCustomSortAttributes(
          this.props.items[0].attributes
        ),
        filter: this.filterData
      });

      this.setState({ iso: iso });
      //console.log("iso",iso);

      //if there is a default sort - let the isotope sort to that value

      setTimeout(() => {
        if (
          this.state.iso &&
          this.props.isotopeForm.initialIsotopeFormValues.sorting
        ) {
          //console.log("THERE IS ISTOP FORM - --", this.props.isotopeForm);
          this.onSortHandler(
            this.props.isotopeForm.initialIsotopeFormValues.sorting
          );
        }
      }, 200);
    }, 1);

    //}
  }

  getCustomSortAttributes(attr) {
    let keys = Object.keys(attr);
    let dataObj = {};

    for (let i = 0; i < keys.length; i++) {
      var obj = {
        [keys[i]]: "[data-" + keys[i] + "]"
      };
      dataObj = { ...obj, ...dataObj };
    }
    return dataObj;
  }

  attributeGeneration(attr) {
    let keys = Object.keys(attr);
    let dataObj = {};

    for (let i = 0; i < keys.length; i++) {
      var obj = {
        ["data-" + keys[i]]: attr[keys[i]]
      };
      dataObj = { ...obj, ...dataObj };
    }
    return dataObj;
  }

  elementClicked() {
    //console.log("CLICKED on ELEMENT");
    //this.setState({ currentEl: j });

    //console.log("this.state", this.state);

    setTimeout(() => {
      // re-apply filtering, sorting, and layout
      this.state.iso.layout();
    }, 1);
  }

  render() {
    return (
      <div className={"isotope"}>
        <div>
          filtering
          {this.props.isotopeForm.fieldsIsotopeForm[0].options.map(
            (item, j) => {
              return (
                <label key={j}>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      this.onFilterHandler(
                        e.target.checked,
                        item.value,
                        item.type
                      )
                    }
                  />
                  {item.label}
                </label>
              );
            }
          )}
        </div>

        <div>
          sorting
          {this.props.isotopeForm.fieldsIsotopeForm[1].options.map(
            (item, j) => {
              return (
                <button key={j} onClick={() => this.onSortHandler(item.value)}>
                  {item.label}
                </button>
              );
            }
          )}
        </div>

        <div className="grid" ref={this.myRef}>
          {this.state.items &&
            this.state.items.map((item, j) => {
              return (
                <div
                  key={j}
                  className="grid-item"
                  {...this.attributeGeneration(item.attributes)}
                  onClick={() => this.elementClicked()}
                >
                  <div className="grid-item-wrapper">{item.entity}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default IsotopeHandler;
